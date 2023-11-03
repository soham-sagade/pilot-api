export const joblogTypeDefs = `
 type Joblog {
    log_id: Int!
    job_id: Int!
    start_date: String!
    end_date: String
    incident_type: String!
    user_id: String!
  }

  type Query {
    getJoblogData(filterObject: JSON!): [Joblog]  
  }
`;
