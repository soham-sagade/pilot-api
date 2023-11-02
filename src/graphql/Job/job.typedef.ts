export const jobTypeDefs = `
 type Job {
    jobId: Int!
    deviceId: Int!
    userId: Int!
    startDate: String!
    status: String!
  }

  type Query {
    getJobData(filterObject: String!): Job
  }

  type Mutation {
    updateJobStatus(actionObject: String!): Job
  }

`;

 