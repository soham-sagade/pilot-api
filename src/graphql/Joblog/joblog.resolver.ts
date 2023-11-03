import { JobLogDao } from "./joblog.dao";
import { JobLog } from "./joblog.model";

export const jobLogQueries = {
  getJoblogData: async (parent, args, context, info) => {
    try {
      const filterData = args.filterObject;
      const dao = new JobLogDao();
      const jobLogData: JobLog[] = await dao.getJoblogData(filterData);
      return jobLogData;
    } catch (error) {
      console.log(error);
    }
  },
};
