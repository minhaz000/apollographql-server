import { expressMiddleware } from "@apollo/server/express4";
import express from "express";
import cors from "cors";
const port = 5000;
import server from "./graphql/server.graphql";
import client, { initConnection } from "./middleware/connect.db";
const app = express();

async function init() {
  app.use(cors(), express.json());
  initConnection();
  app.get("/", async (req, res) => res.send("server is active"));
  app.use("/graphql", expressMiddleware(await server()));

  app.listen(port, () => console.log(`🚀 Server ready at http://localhost:${port}/graphql`));
}
init();
