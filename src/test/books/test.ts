import { expect } from "chai";
import _ from "lodash";
import request from "supertest";
import {
  BookSchema,
  BooksSchema,
  CreatedBooksSchema,
} from "../../books/schema";
import app from "../../index";
const validate = require("jsonschema").validate;

describe("Test the Book endpoints", () => {
  const baseUrl: string = "/books";
  let id: number = -1;

  it("Get all the books", async () => {
    const response = await request(app).get(baseUrl);
    expect(response.status).equal(200);
    if (response.body.length > 0) {
      expect(validate(response.body, BooksSchema).valid).equals(true);
    } else {
      expect(response.body).empty;
    }
  });

  it("Success Post request book", async () => {
    const response = await request(app)
      .post(baseUrl)
      .send([
        {
          title: "title_5",
          isbn: "isbn_5",
          author: "auth0or_5",
          synopsis: "synopsis_5",
          num_pages: 50,
          ebook_availability: true,
        },
      ]);
    expect(response.status).equal(201);
    if (response.body.length > 0) {
      expect(validate(response.body, CreatedBooksSchema).valid).equals(true);
      id = response.body[0].id;
    } else {
      expect(response.body).empty;
    }
  });

  it("Fail Post request book", async () => {
    request(app)
      .post(baseUrl)
      .send([
        {
          title: "title_5",
          isbn: "isbn_5",
          author: "auth0or_5",
          synopsis: "synopsis_5",
          num_pages: 50,
          ebook_availability: true,
        },
      ])
      .expect(400);
  });

  it("Get a single book", async () => {
    const response = await request(app).get(`${baseUrl}/${id}`);
    expect(response.status).equal(200);
    if (!_.isEmpty(response.body)) {
      expect(validate(response.body, BookSchema).valid).equals(true);
    } else {
      expect(response.body).empty;
    }
  });

  it("Update a book", async () => {
    const response = await request(app).put(`${baseUrl}/${id}`).send({
      title: "title_changed",
    });
    expect(response.status).equal(200);
    expect(validate(response.body, BookSchema).valid).equals(true);
    expect(response.body.title).equals("title_changed");
  });

  it("Update a book failed", async () => {
    const response = await request(app).put(`${baseUrl}/${id}`).send({
      title: 1,
    });
    expect(response.status).equal(400);
  });

  it("delete the book", async () => {
    const response = await request(app).delete(`${baseUrl}/${id}`);
    expect(response.status).equal(204);
  });
});
