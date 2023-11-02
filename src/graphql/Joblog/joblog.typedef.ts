export const joblogTypeDefs = `
 type Joblog {
    joblogId: Int!
    jobId: Int!
    startDate: String!
    endDate: String!
    incidentType: String!
    userId: String!
  }

  type Query {
    getJoblogData(filterObject: JSON!): [Joblog]
  }
`;
