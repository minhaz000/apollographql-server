import mongoose from "mongoose";
import { createClient } from "redis";

const client = createClient({ url: "redis://127.0.0.1:55000" });

export async function initConnection() {
  const url = "mongodb://localhost:27017";
  // const url = "mongodb+srv://minhazz678:TXczDFUvS9s39qoC@cluster0.z1rra5m.mongodb.net";
  await mongoose.connect(url, { dbName: "GraphQL" }).then(() => console.log("Database connection successful"));

  // client.on("error", (err) => console.log("Redis Client Error", err));
  // await client.connect();
}

export default client;
