export const networkTypeDefs = `
 type Network {
    networkId: Int!
    name: String!
    userId: String!
  }

  type Query {
    getNetworkData(filterObject: String!): Network
  }
`;
