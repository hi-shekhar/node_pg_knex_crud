import { Request, Response, NextFunction } from "express";
import { CreateableBookSchema, UpdateBookSchema } from "./schema";
const validate = require("jsonschema").validate;

export function validateCreateableBook(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const result = validate(req.body, CreateableBookSchema);
  if (result.valid) {
    next();
  } else {
    throw result.errors[0];
  }
}

export function validateUpdateBook(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const result = validate(req.body, UpdateBookSchema);
  if (result.valid) {
    next();
  } else {
    throw result.errors[0];
  }
}
