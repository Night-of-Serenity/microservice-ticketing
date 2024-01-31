import { MongoMemoryServer } from "mongodb-memory-server";
import mongoose from "mongoose";
import { app } from "../app";
import request from "supertest";

// declare global {
//   var signin: () => Promise<string[]>; // cookie is string[] type
// }

let mongo: any;
// connect db server
beforeAll(async () => {
  process.env.JWT_KEY = "asdfg";

  mongo = await MongoMemoryServer.create();

  const mongoUri = mongo.getUri();

  // console.log({ mongoUri });

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
  if (mongo) {
    await mongo.stop();
  }
  await mongoose.connection.close();
});

// global.signin = async () => {
//   const email = "test@gmail.com";
//   const password = "password";

//   const response = await request(app)
//     .post("/api/users/signup")
//     .send({ email, password })
//     .expect(201);

//   const cookie = response.get("Set-Cookie");

//   return cookie;
// };

// ----------------------------------------------
// other method, use agent

// Using request.agent is better IMHO
// 0 โหวต
// Mehdi · การบรรยาย 211 · 2 ปีที่แล้ว
// declare global {

//     var signin: () => Promise<request.SuperAgentTest>

// }

// global.signin = async () => {

//     const credentials = {

//         email: 'test@test.com',

//         password: 'password'

//     }

//     const agent = request.agent(app)

//     await agent.post('/api/users/signup').send(credentials).expect(201)

//     return agent

// }

// then agent can be used directly in the tests
