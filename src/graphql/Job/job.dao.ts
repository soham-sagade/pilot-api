import { InsertResult } from "typeorm";
import { DBOperations, IDBOperations } from "../../db/pgOperations";
import { Job } from "../../models/jobModel";


interface IJobDao {
  createJob(job_data: Record<string, unknown>): Promise<any>;
  getJobsData(filter_object: Record<string, unknown>): Promise<Job>;
  updateJobStatus(action_object: Record<string, unknown>): any;
}

export class JobDao implements IJobDao {
  private pg: IDBOperations;

  constructor() {
    this.pg = new DBOperations();
  }

  createJob(job_data: Record<string, unknown>): Promise<any> {
    try {
      const {
        user_id,
        device_id,
        start_date,
        end_date,
        incident_type,
        status,
        filePath,
      }: Record<string, any> = job_data;
      if (!user_id || !device_id || !start_date || !status || !filePath)
        return Promise.reject({ error: "Please provide all mandatory fields" });
      return this.pg.createJob(
        user_id,
        device_id,
        start_date,
        end_date,
        incident_type,
        status,
        filePath
      );
    } catch (error) {
      console.log(error);
    }
  }

  getJobsData(filter_object: Record<string, number>): Promise<Job> {
    try {
      const { jobId, deviceId, status }: Record<string, any> = filter_object;
      return this.pg.getJobData(jobId, deviceId, status);
    } catch (error) {
      console.log(error);
    }
  }

  updateJobStatus(action_object: Record<string, unknown>): any {}
}
