import { JobDao } from "./job.dao";
import { Job } from "./job.model";

export const jobQueries = {
  getJobData: async (parent, args, context, info) => {
    try {
      const filterData = args.filterObject;
      const dao = new JobDao();
      const jobData: Job = await dao.getJobsData(filterData);
      return jobData;
    } catch (error) {
      console.log(error);
    }
  },
};

export const jobMutations = {
  createJob: async (parent, args, context, info) => {
    try {
      const jobData = args.jobData;
      const dao = new JobDao();
      const createdJob: Job = await dao.createJob(jobData);
      return createdJob;
    } catch (error) {
      console.log(error);
    }
  },
  
  updateJobStatus: async (parent, args, context, info) => {
    try {
      const jobData = args.jobData;
      const dao = new JobDao();
      const updatedJob: Job = await dao.updateJobStatus(jobData);
      return updatedJob;
    } catch (error) {
      console.log(error);
    }
  },
};
