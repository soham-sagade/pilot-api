import { Device } from "../models/deviceModel";
import { AppDataSource } from "../../dbConnection";
import { UpdateResult } from "typeorm";
import { Job } from "../models/jobModel";


export interface IDBOperations {
  getDeviceData(networkId: number, deviceId: number): Promise<Device>;
  getJobData(jobId: number, deviceId: number, status: string): Promise<Job>;
}

export class DBOperations implements IDBOperations {
  
  async getDeviceData(network_id: number, device_id: number): Promise<Device> {
    const deviceData: Device = await AppDataSource.manager.findOneBy(Device, {
      network_id,
      device_id,
    });
    return deviceData;
  }

  async getJobData(jobId: number, deviceId: number, status: string): Promise<Job> {
    const jobData = await AppDataSource.manager.findOneBy(Job, {
      jobId,
      deviceId,
      status
    });
    return jobData;
  }

  async updateJobStatus(jobId: number, status: string)//: Promise<Job> 
  {
    const jobData = await AppDataSource.manager.createQueryBuilder()
                          .update(Job)
                          .set({status: status})
                          .where("JobId= :jobId",{jobId})
                          .execute()

    //insert into Joblog if above operation is sucessful
    await AppDataSource

    return jobData;
  }
}
