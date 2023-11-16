export const jobTypeDefs = `
 type Job {
    job_id: Int!
    device_id: Int!
    user_id: Int!
    start_date: String!
    status: String!
    filepath: String!
  }

  type Query {
    getJobData(filterObject: JSON!): [Job]
  }

  type Mutation {
    createJob(jobData: JSON!): Job
    updateJobStatus(actionObject: JSON!): Job
  }
`;
