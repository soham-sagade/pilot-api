import { DBOperations, IDBOperations } from "../../db/pgOperations";
import { Job } from "../../models/jobModel";


interface IJobDao {
  getJobsData(filter_object: Record<string, unknown>): Promise<Job>;
  updateJobStatus(action_object: Record<string, unknown>): any;
}

export class JobDao implements IJobDao {
    private pg: IDBOperations;
    
    constructor(){
        this.pg = new DBOperations();
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
