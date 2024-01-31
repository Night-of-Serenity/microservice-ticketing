import express from "express";
import "express-async-errors"; // for handler promise throw Error
import { json } from "body-parser";
import cookieSession from "cookie-session";

import { currentUserRouter } from "./routes/current-user";
import { signinRouter } from "./routes/signin";
import { signoutRouter } from "./routes/signout";
import { signupRouter } from "./routes/signup";
import { errorHandler } from "./middlewares/error-handler";
import { NotFoundError } from "./errors/not-found-error";

const app = express();
// make backend work with nginx proxy
app.set("trust proxy", true);
app.use(json());
app.use(
  cookieSession({
    signed: false, // no encrpyt so it work with many language backend
    secure: process.env.NODE_ENV !== "test", // required https, set false when in test environment
  })
);

app.use(currentUserRouter);
app.use(signinRouter);
app.use(signoutRouter);
app.use(signupRouter);

app.all("*", async (req, res) => {
  throw new NotFoundError();
});

app.use(errorHandler);

export { app };
