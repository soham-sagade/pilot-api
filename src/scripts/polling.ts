import {
  deviceRepository,
  jobLogsRepository,
  jobRepository,
} from "../../dbConnection";
import { Device } from "../models/deviceModel";
import { DeviceStatus, JobStatus } from "../types";

export async function updateJobStatuses() {
  try {
    const ongoingJobs: any = await jobRepository.find({
      where: {
        status: JobStatus.PRINTING,
      },
    });

    if (!ongoingJobs.length) return;

    const deviceIds: any = ongoingJobs.map((job) => job.device_id);

    const deviceForJob: any = await deviceRepository
      .createQueryBuilder("device")
      .where("device.device_id IN(:...deviceIds)", { deviceIds })
      .getOne();

    ongoingJobs.forEach(async (job) => {
      const startTime = Math.floor(new Date(job.start_date).getTime() / 1000);
      const currentTime = Math.floor(new Date().getTime() / 1000);
      const devicePrintingTime = deviceForJob.printing_time;

      if (currentTime - startTime + 5 >= devicePrintingTime) {
        const jobToUpdate = await jobRepository.findOneBy({
          job_id: job.job_id,
        });
        jobToUpdate.status = JobStatus.COMPLETED;
        jobToUpdate.end_date = new Date();
        await jobRepository.save(jobToUpdate);

        const joblogToUpdate = jobLogsRepository.create({
          job_id: job.job_id,
          incident_type: JobStatus.COMPLETED,
          start_date: job.start_date,
          end_date: new Date(),
          user_id: job.user_id,
        });

        await jobLogsRepository.save(joblogToUpdate);

        const deviceToUpdate = await deviceRepository.findOneBy({
          device_id: job.device_id,
        });
        deviceToUpdate.status = DeviceStatus.IDLE;
        await deviceRepository.save(deviceToUpdate);
      }
    });
  } catch (error) {
    throw new Error(
      `Something went wrong, server shutting down:${error.toString()}`
    );
  }
}
