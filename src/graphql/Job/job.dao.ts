import { InsertResult } from "typeorm";
import { DBOperations, IDBOperations } from "../../db/pgOperations";
import { Job } from "../../models/jobModel";


interface IJobDao {
  createJob(job_data: Record<string, unknown>): Promise<any>;
  getJobsData(filter_object: Record<string, unknown>): Promise<Job[]>;
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
        status,
        file_path,
      }: Record<string, any> = job_data;
      if (!user_id || !device_id || !status || !file_path)
        return Promise.reject({ error: "Please provide all mandatory fields" });
      return this.pg.createJob(
        user_id,
        device_id,
        start_date,
        end_date,
        status,
        file_path
      );
    } catch (error) {
      console.log(error);
    }
  }

  getJobsData(filter_object: Record<string, number>): Promise<Job[]> {
    try {
      const { job_id, device_id, status }: Record<string, any> = filter_object;
      return this.pg.getJobData(job_id, device_id, status);
    } catch (error) {
      console.log(error);
    }
  }

  updateJobStatus(action_object: Record<string, unknown>):  Promise<Job> {
    try {
      const { job_id, status }: Record<string, any> = action_object;
      return this.pg.updateJobStatus(job_id, status);
    } catch (error) {
      console.log(error);
    }
  }
}
