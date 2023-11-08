export const deviceTypeDefs = `
 type DeviceLog {
    log_id: String!
    device_id: String!
    occured_at: String!
    status: String!
    change_description: String! 
  }

  type Query {
    getDeviceLogsData(filterObject: JSON!): [DeviceLog]
  }
`;
