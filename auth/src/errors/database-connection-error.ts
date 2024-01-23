import { ValidationError } from "express-validator";

export class DatabaseConnectionError extends Error {
  reason = "Error connecting to database";
  constructor() {
    super();

    // Only because we are extending a built in class in ts
    Object.setPrototypeOf(this, DatabaseConnectionError.prototype);
  }
}
