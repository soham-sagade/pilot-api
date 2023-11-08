export const networkTypeDefs = `
 type Network {
    network_id: Int!
    name: String!
    user_id: String!
  }

  type Query {
    getAllNetworks(filterObject: JSON!): [Network]  
  }
`;
