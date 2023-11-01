import { Joblog } from "../Joblog/joblog.model";

interface IJoblogDao {
  getJoblogData(filter_object: Record<string, unknown>): Array<Joblog>;
}

export class NetworkDao implements IJoblogDao {
  getJoblogData(filter_object: Record<string, unknown>): Array<Joblog> {
    return new Array();
  }
}
