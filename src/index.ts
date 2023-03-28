import * as dotenv from "dotenv";
dotenv.config();
import express, { Response, Request, NextFunction } from "express";
import bodyParser from "body-parser";
import { ValidationError } from "jsonschema";
import * as swaggerUI from "swagger-ui-express";
// import * as swaggerJsdoc  from "swagger-jsdoc";

// import toOpenApi from "@openapi-contrib/json-schema-to-openapi-schema";
import data from "./openapi.json";
import { OpenAPI } from "./books/openapi"
import books from "./books/router";
import _ from "lodash";
const app = express();
export default app;
const PORT = process.env.PORT;

// support parsing of application/json type post data
app.use(bodyParser.json());
//support parsing of application/x-www-form-urlencoded post data
app.use(bodyParser.urlencoded({ extended: true }));

const openapi = data;
_.merge(openapi, OpenAPI);

app.use("/books", books);
const swaggerUiSetup = swaggerUI.setup(openapi);
app.use("/", swaggerUI.serve, swaggerUiSetup);
/**
 * Error handler middleware for validation errors.
 */
app.use(
  (error: Error, request: Request, response: Response, next: NextFunction) => {
    // Check the error is a validation error
    if (error instanceof ValidationError) {
      // Handle the error
      response.status(400).send(error);
      next();
    } else {
      // Pass error on if not a validation error
      next(error);
    }
  }
);

app.listen(PORT, () => {
  console.log(`The app is running on port ${PORT}`);
});
