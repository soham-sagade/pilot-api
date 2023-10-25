import { ApolloServer } from "@apollo/server";
import { expressMiddleware } from "@apollo/server/express4";
import { ApolloServerPluginDrainHttpServer } from "@apollo/server/plugin/drainHttpServer";
import express from "express";
import http from "http";
import cors from "cors";
import bodyParser from "body-parser";
import { typeDefs, resolvers } from "./src/graphql";

const port: number | string = process.env.PORT || 8000;

const app = express();
const httpServer = http.createServer(app);

// Set up Apollo Server
const server: ApolloServer = new ApolloServer({
  typeDefs,
  resolvers,
  plugins: [ApolloServerPluginDrainHttpServer({ httpServer })],
});

await server.start();

app.use(cors(), bodyParser.json(), expressMiddleware(server));

import { DataSource } from "typeorm";
import { user_info } from "./src/controllers/User";

const AppDataSource = new DataSource({
  type: "postgres",
  url: "postgres://ufyywhks:sGWHqNGMuRm1naH5rqMhpBRqJgywAr93@flora.db.elephantsql.com/ufyywhks",
  port: 5432,
});

AppDataSource.initialize()
  .then(() => {
    console.log("Data Source has been initialized!");
  })
  .catch((err) => {
    console.error("Error during Data Source initialization", err);
  });

const userRepository = AppDataSource.getRepository(user_info);

// const user = new user_info();

const allUsers = await userRepository.find({});
console.log(allUsers);

httpServer.listen({ port }, () =>
  console.log(`🚀 Server ready at http://localhost:${port}`)
);
