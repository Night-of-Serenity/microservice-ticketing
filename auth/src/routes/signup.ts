import express, { NextFunction, Request, Response } from "express";
import { body, validationResult } from "express-validator";
const router = express.Router();

router.post(
  "/api/users/signup",
  [
    body("email").isEmail().withMessage("Email must be valid"),
    body("password")
      .trim()
      .isLength({ min: 4, max: 20 })
      .withMessage("Password musy be between 4 and 20 characters"),
  ],
  (req: Request, res: Response, next: NextFunction) => {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      console.log("errors:", errors);
      const error = new Error("invalid email or password");
      throw error;
    }
    const { email, password } = req.body;

    console.log("Create User !!!");
    throw new Error("Error connecting to database");
    res.send({});
  }
);

export { router as signupRouter };
