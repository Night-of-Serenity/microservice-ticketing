import request from "supertest";
import { app } from "../app";

type Signin = Promise<string[]>;

export const signin = async (): Signin => {
  const email = "test@gmail.com";
  const password = "password";

  const response = await request(app)
    .post("/api/users/signup")
    .send({ email, password })
    .expect(201);

  const cookie = response.get("Set-Cookie");

  return cookie;
};
