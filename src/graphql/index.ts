import { deviceQueries, deviceMutations } from "./Device/device.resolver";
import { deviceTypeDefs } from "./Device/device.typedef";
import { networkQueries } from "./Network/network.resolver";
import { networkTypeDefs } from "./Network/network.typedef";
import { joblogQueries } from "./Joblog/joblog.resolver";
import { joblogTypeDefs } from "./Joblog/joblog.typedef";

export const resolvers = {
  Query: {
    ...deviceQueries,
    ...networkQueries,
    ...joblogQueries,
  },  
  Mutation: {
    ...deviceMutations,
  },
};

export const typeDefs = deviceTypeDefs + networkTypeDefs + joblogTypeDefs;
