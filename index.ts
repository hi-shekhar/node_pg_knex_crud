import * as dotenv from 'dotenv';
dotenv.config();
import express, { Response, Request, NextFunction } from "express";
import bodyParser from "body-parser";
import { ValidationError } from "jsonschema";

import books from './src/books/router';
const app = express();
const PORT = process.env.PORT;

// support parsing of application/json type post data
app.use(bodyParser.json());
//support parsing of application/x-www-form-urlencoded post data
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/books', books);

/**
 * Error handler middleware for validation errors.
 */
app.use((error: Error, request: Request, response: Response, next: NextFunction) => {
  // Check the error is a validation error
  if (error instanceof ValidationError) {
    // Handle the error
    response.status(400).send(error);
    next();
  } else {
    // Pass error on if not a validation error
    next(error);
  }
});

app.listen(PORT, () => {
  console.log(`The app is running on port ${PORT}`);
});
