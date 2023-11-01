import { Job } from "../../models/jobModel";


interface IJobDao {
  getJobsData(filter_object: Record<string, unknown>): Job;
  updateJobStatus(action_object: Record<string, unknown>): any;
}

export class JobDao implements IJobDao {
    getJobsData(filter_object: Record<string, unknown>): any {
    // return new Device();
  }
  updateJobStatus(action_object: Record<string, unknown>): any {}
}
