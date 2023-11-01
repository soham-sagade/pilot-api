import { deviceQueries, deviceMutations } from "./Device/device.resolver";
import { deviceTypeDefs } from "./Device/device.typedef";
import { networkQueries } from "./Network/network.resolver";
import { networkTypeDefs } from "./Network/network.typedef";
import { joblogQueries } from "./Joblog/joblog.resolver";
import { joblogTypeDefs } from "./Joblog/joblog.typedef";
import { jobMutations, jobQueries } from "./Job/job.resolver";
import { jobTypeDefs } from "./Job/job.typedef";

export const resolvers = {
  Query: {
    ...deviceQueries,
    ...networkQueries,
    ...joblogQueries,
    ...jobQueries,
  },

  Mutation: {
    ...deviceMutations,
    ...jobMutations,
  },
};

export const typeDefs = deviceTypeDefs + networkTypeDefs + joblogTypeDefs + jobTypeDefs;
