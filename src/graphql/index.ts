import {
  deviceQueries,
  deviceMutations,
} from "./Device/device.resolver";
import { deviceTypeDefs } from "./Device/device.typedef";
import {
  operationQueries,
  operationMutations,
} from "./operations/operations.resolver";
import { operationTypeDefs } from "./operations/operations.typedef";

export const resolvers = {
  Query: {
    ...deviceQueries,
    ...operationQueries,
  },
  Mutation: {
    ...deviceMutations,
    ...operationMutations,
  },
};

export const typeDefs = deviceTypeDefs + operationTypeDefs;
