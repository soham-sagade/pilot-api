export const deviceTypeDefs = `
 type Device {
    status: String!
    created_at: String!
    temperature: Int!
    available_material: String!
    humidity: Int!
    device_info: String!
  }

  type Query {
    getDeviceData(filterObject: JSON!): Device
    getAllDevices(filterObject: JSON!): [Device]
  }
`;
