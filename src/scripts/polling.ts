import {
  deviceLogRepository,
  deviceRepository,
  jobLogsRepository,
  jobRepository,
} from "../../dbConnection";
import { DeviceStatus, JobStatus, statusDescMap } from "../types";
import callEvent from "./deviceEvent";

export async function updateJobStatuses() {
  try {
    // callEvent() TODO: Enable while actual Demo
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

    ongoingJobs.forEach(async (job: any) => {
      const startTime = Math.floor(new Date(job.start_date).getTime() / 1000);
      const currentTime = Math.floor(new Date().getTime() / 1000);
      const devicePrintingTime = deviceForJob.printing_time;

      if (currentTime + 100000000000 - startTime  >= devicePrintingTime) {
        const jobToUpdate = await jobRepository.findOneBy({
          job_id: job.job_id,
        });
        if(jobToUpdate.status==='PSD')
        {
          return;
        }
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

        const deviceLogToUpdate = deviceLogRepository.create({
          device_id: job.device_id,
          status: DeviceStatus.IDLE,
          occurred_at: new Date(),
          change_description: statusDescMap.IDLE ?? "NA",
        });

        await deviceLogRepository.save(deviceLogToUpdate);

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
