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
    status: JobStatus,
    filePath: string
  ): Promise<Job>;
  getJobLogData(
    job_id: number,
    incident_type: string,
    start_date: Date
  ): Promise<Joblog[]>;
  updateJobStatus(jobId: number, status: string): Promise<Job>;
  getAllDeviceData(network_id: number): Promise<Array<Device>>;
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

    const jobData = await jobRepository.find({
      where: {
        job_id: job_id,
        ...(device_id && { device_id: device_id }),
        ...(status && { status: status }),
      },
    });
    return jobData[0];
  }

  async createJob(
    user_id: number,
    device_id: number,
    start_date: string,
    end_date: string,
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
        incident_type: status,
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

  async updateJobStatus(jobId: number, status: string): Promise<Job> {
    try {
      const jobToUpdate = await jobRepository.findOneBy({
        job_id: jobId,
      });
      jobToUpdate.status = status;
      let updatedJob
      if(status=='ABORT' || status=='COMPLETED')
      {
        jobToUpdate.end_date=new Date();
        updatedJob= await jobRepository.save(jobToUpdate); 

        //update device status
        const deviceToUpdate = await deviceRepository.findOneBy({
          device_id: jobToUpdate.device_id,
        });
        deviceToUpdate.status = 'IDLE';
        await deviceRepository.save(deviceToUpdate);
      }
      else{
        updatedJob= await jobRepository.save(jobToUpdate); 
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
}
