export const jobTypeDefs = `
 type Job {
    job_id: Int!
    device_id: Int!
    user_id: Int!
    incident_type: String
    start_date: String!
    status: String!
  }

  type Query {
    getJobData(filterObject: JSON!): Job
  }

  type Mutation {
    createJob(jobData: JSON!): Job
    updateJobStatus(actionObject: JSON!): Job
  }
`;
