import { DataSource } from "typeorm";
import { Userdata } from "./src/models/userModel";
import { Device } from "./src/models/deviceModel";
import { Joblog } from "./src/models/jobLogModel";
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
  entities: [Userdata, Device, Joblog, Job, Material, Network],
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

export const userRepository = AppDataSource.getRepository(Userdata);
export const jobRepository = AppDataSource.getRepository(Job);
export const jobLogsRepository = AppDataSource.getRepository(Joblog);
export const networkRepository = AppDataSource.getRepository(Network);
export const materialRepository = AppDataSource.getRepository(Material);
export const deviceRepository = AppDataSource.getRepository(Device);
