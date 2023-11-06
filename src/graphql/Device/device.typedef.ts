export const deviceTypeDefs = `
 type Device {
    device_id: Int!
    material_id: Int!
    network_id: Int!
    name: String!
    serial_number: String!
    uuid: String!
    status: String!
    created_at: String!
    temperature: Int!
    manufacturer: String!
    available_material: String!
    humidity: Int!
    printing_time: Int!
  }

  type Query {
    getDeviceData(filterObject: JSON!): Device
    getAllDevices(networkId: Int): [Device]
  }
`;
