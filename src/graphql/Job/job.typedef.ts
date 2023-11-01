export const jobTypeDefs = `
 type Job {
    jobId: Int!
    deviceId: int!
    userId: Int!
    startDate: string!
    status: string!
  }

  type Query {
    getJobData(filterObject: String!): Job
  }

  type Mutation {
    updateJobStatus(actionObject: String!): String
  }

`;

 