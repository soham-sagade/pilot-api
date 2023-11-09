export const devicelogTypeDefs = `
 type Devicelog {
    log_id: String!
    device_id: String!
    occurred_at: String!
    status: String!
    change_description: String! 
  }

  type Query {
    getDevicelogsData(filterObject: JSON!): [Devicelog]
  }
`;
