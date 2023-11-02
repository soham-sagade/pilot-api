import { GraphQLScalarType } from "graphql";

const JSONScalar = new GraphQLScalarType({
  name: "JSON",
  description: "Custom scalar type for representing JSON data",
  serialize(value: string) {
    // This function is used to serialize the JSON data for response.
    return JSON.stringify(value);
  },
  parseValue(value: string) {
    // This function is used to parse input values as JSON.
    try {
      return JSON.parse(value);
    } catch (error) {
      throw new Error("Invalid JSON value.");
    }
  },
  parseLiteral(ast) {
    // This function is used to parse JSON values from query literals.
    if (ast.kind === "StringValue") {
      try {
        return JSON.parse(ast.value);
      } catch (error) {
        throw new Error("Invalid JSON value.");
      }
    }
    throw new Error("Invalid JSON value.");
  },
});

export type OperationCall = "STRT" | "STP" | "PSE";

export type JobStatus = "RUNNING" | "PAUSED" | "ABORTED";

export type IncidentType = "PRNT" | "REFL" | "MNTN";

export type DeviceStatus = "IDLE" | "PRINTING" | "OFFLINE"

export type updateDeviceRecord = {
  networkId: number;
  deviceId: number;
  action: string;
};
