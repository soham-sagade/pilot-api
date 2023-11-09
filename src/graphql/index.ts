import { deviceQueries } from "./Device/device.resolver";
import { deviceTypeDefs } from "./Device/device.typedef";
import { networkQueries } from "./Network/network.resolver";
import { networkTypeDefs } from "./Network/network.typedef";
import { jobLogQueries } from "./Joblog/joblog.resolver";
import { joblogTypeDefs } from "./Joblog/joblog.typedef";
import { jobMutations, jobQueries } from "./Job/job.resolver";
import { jobTypeDefs } from "./Job/job.typedef";
import { deviceLogQueries } from "./DeviceLog/deviceLog.resolver";
import { devicelogTypeDefs } from "./DeviceLog/deviceLog.typedef";

export const resolvers = {
  Query: {
    ...deviceQueries,
    ...networkQueries,
    ...jobLogQueries,
    ...jobQueries,
    ...deviceLogQueries,
  },

  Mutation: {
    ...jobMutations,
  },
};

export const typeDefs =
  `scalar JSON` +
  deviceTypeDefs +
  networkTypeDefs +
  joblogTypeDefs +
  jobTypeDefs +
  devicelogTypeDefs;
