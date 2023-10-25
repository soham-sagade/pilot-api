import {
  analyticsQueries,
  analyticsMutations,
} from "./analytics/analytics.resolver";
import { analyticsTypeDefs } from "./analytics/analytics.typedef";
import {
  operationQueries,
  operationMutations,
} from "./operations/operations.resolver";
import { operationTypeDefs } from "./operations/operations.typedef";

export const resolvers = {
  Query: {
    ...analyticsQueries,
    ...operationQueries,
  },
  Mutation: {
    ...analyticsMutations,
    ...operationMutations,
  },
};

export const typeDefs = analyticsTypeDefs + operationTypeDefs;
