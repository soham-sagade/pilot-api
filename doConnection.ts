import { DataSource } from "typeorm";
import { Userdata } from "./src/models/userModel";
import { Device } from "./src/models/deviceModel";
import { Joblogs } from "./src/models/jobLogsModel";
import { Job } from "./src/models/jobModel";
import { Material } from "./src/models/materialModel";
import { Network } from "./src/models/networkModel";

export const AppDataSource = new DataSource({
  type: "postgres",
  //TODO: Remove connection string
  url:
    process.env.POSTGRES_CONNECTION_URL ||
    "postgres://ufyywhks:sGWHqNGMuRm1naH5rqMhpBRqJgywAr93@flora.db.elephantsql.com/ufyywhks",
  port: 5432,
  entities: [Userdata, Device, Joblogs, Job, Material, Network],
});

export function connectDatabase() {
  AppDataSource.initialize()
    .then(() => {
      console.log("Data Source has been initialized!");
    })
    .catch((err) => {
      console.error("Error during Data Source initialization", err);
    });
}
