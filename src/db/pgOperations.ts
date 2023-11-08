import { Device } from "../models/deviceModel";
import {
  AppDataSource,
  deviceRepository,
  jobLogsRepository,
  jobRepository,
  networkRepository,
} from "../../dbConnection";
import { Job } from "../models/jobModel";
import { DeviceStatus, JobStatus } from "../types";
import { Joblog } from "../models/jobLogModel";
import { Network } from "../models/networkModel";

export interface IDBOperations {
  getDeviceData(network_id: number, device_id: number): Promise<Device>;
  getJobData(
    job_id: number,
    device_id?: number,
    status?: string
  ): Promise<Job[]>;
  createJob(
    user_id: number,
    device_id: number,
    start_date: string,
    end_date: string,
    status: string,
    filePath: string
  ): Promise<Job>;
  getJobLogData(
    job_id: number,
    incident_type: string,
    start_date: Date
  ): Promise<Joblog[]>;
  updateJobStatus(job_id: number, status: string): Promise<Job>;
  getAllDeviceData(network_id: number): Promise<Array<Device>>;
  getNetworks(user_id:number): Promise<Network[]>
}

export class DBOperations implements IDBOperations {
  async getDeviceData(network_id: number, device_id: number): Promise<Device> {
    const deviceData: Device = await AppDataSource.manager.findOneBy(Device, {
      network_id,
      device_id,
    });
    return deviceData;
  }

  async getJobData(
    job_id: number,
    device_id?: number,
    status?: string
  ): Promise<Job[]> {
    const jobData = await jobRepository.find({
      where: {
         ...(job_id && { job_id: job_id}),
        ...(device_id && { device_id: device_id }),
        ...(status && { status: status }),
      },
    });
    return jobData;
  }

  async createJob(
    user_id: number,
    device_id: number,
    start_date: string,
    end_date: string,
    status: string,
    filePath: string
  ): Promise<Job> {
    try {
      const createdJob: Job = jobRepository.create({
        user_id,
        device_id,
        start_date: new Date(),
        end_date: null,
        status,
        filepath: filePath,
      });
      await jobRepository.save(createdJob);

      const createdJobLog: Joblog = jobLogsRepository.create({
        job_id: createdJob.job_id,
        incident_type: status,
        start_date: new Date(),
        user_id,
        end_date: null,
      });
      await jobLogsRepository.save(createdJobLog);

      const deviceToUpdate = await deviceRepository.findOneBy({
        device_id: device_id,
      });
      deviceToUpdate.status = DeviceStatus.PRINTING;
      const updatedDevice = await deviceRepository.save(deviceToUpdate);

      return createdJob;
    } catch (error) {
      console.log(error);
    }
  }

  async getJobLogData(
    job_id: number,
    incident_type: string,
    start_date: Date
  ): Promise<Joblog[]> {
    const jobLogData = await jobLogsRepository.find({
      where: {
        job_id: job_id,
        ...(incident_type && { incident_type: incident_type }),
        ...(start_date && { start_date: start_date }),
      },
    });
    return jobLogData;
  }

  async updateJobStatus(job_id: number, status: string): Promise<Job> {
    try {
      const jobToUpdate = await jobRepository.findOneBy({
        job_id,
      });
      jobToUpdate.status = status;
      let updatedJob;
      if (status == JobStatus.ABORTED || status == JobStatus.COMPLETED) {
        jobToUpdate.end_date = new Date();
        updatedJob = await jobRepository.save(jobToUpdate);

        //update device status
        const deviceToUpdate = await deviceRepository.findOneBy({
          device_id: jobToUpdate.device_id,
        });
        deviceToUpdate.status = DeviceStatus.IDLE;
        await deviceRepository.save(deviceToUpdate);
      } else {
        updatedJob = await jobRepository.save(jobToUpdate);
      }

      const createdJobLog: Joblog = jobLogsRepository.create({
        job_id: jobToUpdate.job_id,
        incident_type: status,
        start_date: new Date(),
        user_id: 1, //get details from local storage
        end_date: null,
      });
      await jobLogsRepository.save(createdJobLog);

      return updatedJob;
    } catch (error) {
      console.log(error);
    }
  }

  async getAllDeviceData(network_id: number): Promise<Device[]> {
    const deviceData = deviceRepository.find({
      where: {
        network_id,
      },
    });
    return deviceData;
  }

  async getNetworks(user_id:number): Promise<Network[]>{
    const networks = networkRepository.find({
      where: {
        user_id,
      },
    });
    return networks;
  }
}
