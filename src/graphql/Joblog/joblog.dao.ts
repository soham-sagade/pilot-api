import { DBOperations, IDBOperations } from "../../db/pgOperations";
import { JobLog } from "../Joblog/joblog.model";

interface IJobLogDao {
  getJoblogData(filter_object: Record<string, unknown>): Promise<JobLog[]>;
}

export class JobLogDao implements IJobLogDao {
 
  private pg: IDBOperations;
    
    constructor(){
        this.pg = new DBOperations();
    }
    getJoblogData(filter_object: Record<string, number>): Promise<JobLog[]> {
        try {
          const { jobId, incidentType, startDate }: Record<string, any> = filter_object;
          return this.pg.getJobLogData(jobId, incidentType, startDate);
        } catch (error) {
          console.log(error);
        }
      }
}
