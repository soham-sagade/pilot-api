import { JobLogDao } from "./joblog.dao";
import { JobLog } from "./joblog.model";

export const joblogQueries = {
  getJoblogData: () => "Analytics fetched",
};


export const jobLogQueries = {
  getJobData: async (parent, args, context, info) => {
      try {
          const filterData = args.filterObject;
          const dao = new JobLogDao();
          const jobData: JobLog = await dao.getJoblogData(filterData);
          return jobData;
      }
      catch (error)
      {
          console.log(error);
      }
  
},
}