import { Request, Response, NextFunction } from "express";
import { createableBookSchema, updateBookSchema } from "./schema";
const validate = require("jsonschema").validate;

export function validateCreateableBook(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const result = validate(req.body, createableBookSchema);
  if (result.valid) {
    next();
  } else {
    throw Error(result.errors);
  }
}

export function validateUpdateBook(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const result = validate(req.body, updateBookSchema);
  if (result.valid) {
    next();
  } else {
    throw Error(result.errors);
  }
}
