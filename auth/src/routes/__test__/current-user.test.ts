import request from "supertest";
import { app } from "../../app";
import { signin } from "../../test/authHelper";

it("responds with details about the current user", async () => {
  const cookie = await signin();

  const response = await request(app)
    .get("/api/users/currentuser")
    .set("Cookie", cookie)
    .send()
    .expect(200);

  //   console.log("res body:", response.body);
  expect(response.body.currentUser.email).toEqual("test@gmail.com");
});

it("responds with null if not authenticated", async () => {
  const response = await request(app)
    .get("/api/users/currentuser")
    .send()
    .expect(200);

  expect(response.body.currentUser).toEqual(null);
});
