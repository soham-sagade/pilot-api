import { ApolloServer } from "@apollo/server";
import { expressMiddleware } from "@apollo/server/express4";
import { ApolloServerPluginDrainHttpServer } from "@apollo/server/plugin/drainHttpServer";
import express from "express";
import http from "http";
import cors from "cors";
import bodyParser from "body-parser";
import { typeDefs, resolvers } from "./src/graphql";
import { userRouter } from "./src/routes/userRouter";
import { connectDatabase } from "./dbConnection";
import "dotenv/config";
import validateUser from "./src/middlewares/validateUser";
import { updateJobStatuses } from "./src/scripts/polling";

const port: number | string = process.env.PORT || 8080;

const app = express();
const httpServer = http.createServer(app);

// Set up Apollo Server
const server: ApolloServer = new ApolloServer({
  typeDefs,
  resolvers,
  plugins: [ApolloServerPluginDrainHttpServer({ httpServer })],
});

await server.start();

connectDatabase();

app.use(cors(), bodyParser.json());
app.use(userRouter);
app.use(validateUser, expressMiddleware(server));

httpServer.listen({ port }, () =>
  console.log(`🚀 Server ready at http://localhost:${port}`)
);

setInterval(() => {
  //updateJobStatuses();
}, 30000);
