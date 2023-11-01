export const deviceTypeDefs = `
 type Device {
    deviceId: Int!
    materialId: Int!
    networkId: Int!
    name: String!
    serialInt: String!
    uuid: String!
    status: String!
    createdAt: String!
    temperature: Int!
    manufacturer: String!
    availableMaterial: String!
    humidity: Int!
    printingTime: Int!
  }

  type Query {
    getDeviceData(filterObject: String!): Device
  }

  type Mutation {
    updateDeviceStatus(actionObject: String!): String
  }
`;
