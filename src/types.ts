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

export const JobStatus = {
  PRINTING: "PRNT",
  ABORTED: "ABRT",
  COMPLETED: "CMPLT",
  PAUSED: "PSD",
};

export type IncidentType = "PRNT" | "REFL" | "MNTN";

export const DeviceStatus = {
  PRINTING: "PRNT",
  IDLE: "IDLE",
  OFFLINE: "OFLN",
  TMPCHNG: "TMPCHNG",
  HMDTCHNG: "HMDTCHNG",
};

export type updateDeviceRecord = {
  networkId: number;
  deviceId: number;
  action: string;
};

export const statusDescMap = {
  PRNT: "Printing Job Started",
  TMPCHNG: "Temperature Changed",
  HMDTCHNG: "Humidity Changed",
  IDLE: "Device Idle",
};
