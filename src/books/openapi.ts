// @ts-ignore: Unreachable code error
import toOpenApi from "json-schema-to-openapi-schema";
import {
  BookSchema,
  BooksSchema,
  CreateableBookSchema,
  CreatedBooksSchema,
  UpdateBookSchema,
} from "./schema";

export const OpenAPI = {
  tags: {
    name: "Books",
  },
  paths: {
    "/books": {
      get: {
        tags: ["Books"],
        summary: "Get all books",
        responses: {
          "200": {
            description: "A list of users",
            content: {
              "application/json": {
                schema: {
                  $ref: "#/components/schemas/Books",
                },
              },
            },
          },
          "500": {
            description: " Internal Server Error",
          },
        },
      },
      post: {
        tags: ["Books"],
        summary: "Create Books",
        requestBody: {
          content: {
            "application/json": {
              schema: {
                $ref: "#/components/schemas/BookCreatable",
              },
            },
          },
        },
        responses: {
          "201": {
            description: "Resource Created",
            content: {
              "application/json": {
                schema: {
                  $ref: "#/components/schemas/BookCreated",
                },
              },
            },
          },
          "400": {
            description: "Error: Bad Request",
          },
          "500": {
            description: " Internal Server Error",
          },
        },
      },
    },
    "/books/{id}": {
      get: {
        tags: ["Books"],
        summary: "Get a book",
        parameters: [
          {
            in: "path",
            name: "id",
            required: true,
            schema: {
              type: "integer",
              minimum: 1,
            },
            description: "The book ID",
          },
        ],
        responses: {
          "200": {
            description: "Success: Request processed",
            content: {
              "application/json": {
                schema: {
                  $ref: "#/components/schemas/Book",
                },
              },
            },
          },
          "404": {
            description: "Error: Resource Not Found",
          },
          "400": {
            description: "Error: Bad Request",
          },
          "500": {
            description: " Internal Server Error",
          },
        },
      },
      put: {
        tags: ["Books"],
        summary: "Update a book",
        parameters: [
          {
            in: "path",
            name: "id",
            required: true,
            schema: {
              type: "integer",
              minimum: 1,
            },
            description: "The book ID",
          },
        ],
        requestBody: {
          content: {
            "application/json": {
              schema: {
                $ref: "#/components/schemas/BookUpdatable",
              },
            },
          },
        },
        responses: {
          "200": {
            description: "Success: Request processed",
            content: {
              "application/json": {
                schema: {
                  $ref: "#/components/schemas/Book",
                },
              },
            },
          },
          "404": {
            description: "Error: Resource Not Found",
          },
          "400": {
            description: "Error: Bad Request",
          },
          "500": {
            description: " Internal Server Error",
          },
        },
      },
      delete: {
        tags: ["Books"],

        summary: "Delete a book",
        parameters: [
          {
            in: "path",
            name: "id",
            required: true,
            schema: {
              type: "integer",
              minimum: 1,
            },
            description: "The book ID",
          },
        ],
        responses: {
          "204": {
            description: "Success status code",
          },
          "404": {
            description: "Error: Resource Not Found",
          },
          "500": {
            description: " Internal Server Error",
          },
        },
      },
    },
  },
  components: {
    schemas: {
      Books: toOpenApi(BooksSchema),
      BookCreatable: toOpenApi(CreateableBookSchema),
      BookCreated: toOpenApi(CreatedBooksSchema),
      BookUpdatable: toOpenApi(UpdateBookSchema),
      Book: toOpenApi(BookSchema),
    },
  },
};
