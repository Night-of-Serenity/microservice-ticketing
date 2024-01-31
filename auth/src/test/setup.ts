import { MongoMemoryServer } from "mongodb-memory-server";
import mongoose from "mongoose";
import { app } from "../app";

let mongo: any;
// connect db server
beforeAll(async () => {
  mongo = await MongoMemoryServer.create();
  const mongoUri = mongo.getUri();

  console.log({ mongoUri });

  await mongoose.connect(mongoUri, {});
});

// reset db before each test
beforeEach(async () => {
  const collections = await mongoose.connection.db.collections();

  for (let collection of collections) {
    await collection.deleteMany();
  }
});

// close db server
afterAll(async () => {
  await mongo.stop();
  await mongoose.connection.close();
});
