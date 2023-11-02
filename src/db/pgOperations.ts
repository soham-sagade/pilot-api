import { Device } from "../models/deviceModel";
import {
  AppDataSource,
  deviceRepository,
  jobLogsRepository,
  jobRepository,
} from "../../dbConnection";
import { Job } from "../models/jobModel";
import { IncidentType, JobStatus } from "../types";
import { JobLog } from "../graphql/Joblog/joblog.model";
import { Joblog } from "../models/jobLogModel";



export interface IDBOperations {
  getDeviceData(networkId: number, deviceId: number): Promise<Device>;
  getJobData(jobId: number, deviceId: number, status: string): Promise<Job>;
  createJob(
    user_id: number,
    device_id: number,
    start_date: string,
    end_date: string,
    incidentType: IncidentType,
    status: JobStatus,
    filePath: string
  ): Promise<Job>;
  getJobLogData(job_id: number, incident_type: string): Promise<Joblog>;
  updateJobStatus(jobId: number, status: string): Promise<Job>;
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
    device_id: number,
    status: string
  ): Promise<Job> {
    const jobData = await AppDataSource.manager.findOneBy(Job, {
      job_id,
      device_id,
      status,
    });
    return jobData;
  }

  async createJob(
    user_id: number,
    device_id: number,
    start_date: string,
    end_date: string,
    incident_type: IncidentType,
    status: JobStatus,
    filePath: string
  ): Promise<Job> {
    try {
      const createdJob: Job = jobRepository.create({
        user_id,
        device_id,
        start_date,
        end_date: null,
        status,
        filepath: filePath,
      });
      await jobRepository.save(createdJob);

      const createdJobLog: Joblog = jobLogsRepository.create({
        job_id: createdJob.job_id,
        incident_type,
        start_date,
        user_id,
        end_date: null,
      });
      await jobLogsRepository.save(createdJobLog);

      const deviceToUpdate = await deviceRepository.findOneBy({
        device_id: device_id,
      });
      deviceToUpdate.status = "PRINTING";
      const updatedDevice = await deviceRepository.save(deviceToUpdate);

      return createdJob;
    } catch (error) {
      console.log(error);
    }
  }

  async getJobLogData(job_id: number, incident_type: string): Promise<Joblog> {
    const jobLogData = await AppDataSource.manager.findOneBy(Joblog, {
      job_id,
      incident_type
    });
    return jobLogData;
  }

  async updateJobStatus(jobId: number, status: string): Promise<Job> 
  {
    try
    {
      const jobToUpdate = await jobRepository.findOneBy({
        job_id: jobId,
      });
      jobToUpdate.status = status;
      const updatedDevice = await jobRepository.save(jobToUpdate);
                      
      const createdJobLog: Joblog = jobLogsRepository.create({
        job_id: jobToUpdate.job_id,
        incident_type: status,
        start_date: new Date(),
        user_id: 1, //get details from local storage
        end_date: null,
      });
      await jobLogsRepository.save(createdJobLog);

      return jobToUpdate;
    }
    catch (error) {
      console.log(error);
    }
  }
}
