import { DataSource } from "typeorm";
import { user_info } from "./src/models/userModel";

export const AppDataSource = new DataSource({
  type: "postgres",
  //TODO: Remove connection string
  url:
    process.env.POSTGRES_CONNECTION_URL ||
    "postgres://ufyywhks:sGWHqNGMuRm1naH5rqMhpBRqJgywAr93@flora.db.elephantsql.com/ufyywhks",
  port: 5432,
  entities: [user_info],
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
