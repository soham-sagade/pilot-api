import { JobDao } from "./job.dao";
import { Job } from "./job.model";

export const jobQueries = {
    getJobData: async (parent, args, context, info) => {
        try {
            const filterData = args.filterObject;
            const dao = new JobDao();
            const jobData: Job = await dao.getJobsData(filterData);
            return jobData;
        }
        catch (error)
        {
            console.log(error);
        }
    
  },
}
  
  export const jobMutations = {
    updateJobStatus: () => "",
  };
  
