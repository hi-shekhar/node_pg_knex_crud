import { expect } from "chai";
import request from "supertest";
import {
  booksSchema,
  booksSchemas,
  postBookSchema,
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
      expect(validate(response.body, booksSchemas).valid).equals(true);
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
      expect(validate(response.body, postBookSchema).valid).equals(true);
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
    if (response.body.length > 0) {
      expect(validate(response.body, booksSchemas).valid).equals(true);
    } else {
      expect(response.body).empty;
    }
  });

  it("update the book", async () => {
    const response = await request(app).put(`${baseUrl}/${id}`).send({
      title: "title_changed",
    });
    expect(response.status).equal(200);
    expect(validate(response.body, booksSchema).valid).equals(true);
    expect(response.body.title).equals("title_changed");
  });

  it("update the book", async () => {
    const response = await request(app).put(`${baseUrl}/${id}`).send({
      title: "title_changed",
    });
    expect(response.status).equal(200);
    expect(validate(response.body, booksSchema).valid).equals(true);
    expect(response.body.title).equals("title_changed");
  });

  it("delete the book", async () => {
    const response = await request(app).delete(`${baseUrl}/${id}`);
    expect(response.status).equal(204);
  });
});
