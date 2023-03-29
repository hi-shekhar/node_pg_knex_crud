import _ from "lodash";

export const CreateableBookSchema = {
  type: "array",
  items: {
    type: "object",
    properties: {
      title: {
        type: "string",
      },
      isbn: {
        type: "string",
      },
      author: {
        type: "string",
      },
      synopsis: {
        type: "string",
      },
      num_pages: {
        type: "integer",
      },
      ebook_availability: {
        type: "boolean",
      },
    },
    required: [
      "title",
      "isbn",
      "author",
      "synopsis",
      "num_pages",
      "ebook_availability",
    ],
    additionalProperties: false,
  },
};

export const UpdateBookSchema = {
  type: "object",
  properties: {
    title: {
      type: "string",
    },
    isbn: {
      type: "string",
    },
    author: {
      type: "string",
    },
    synopsis: {
      type: "string",
    },
    num_pages: {
      type: "integer",
    },
    ebook_availability: {
      type: "boolean",
    },
  },
  additionalProperties: false,
};

export const BookSchema = {
  type: "object",
  properties: {
    id: {
      type: "number",
    },
    title: {
      type: "string",
    },
    isbn: {
      type: "string",
    },
    author: {
      type: "string",
    },
    synopsis: {
      type: "string",
    },
    num_pages: {
      type: "integer",
    },
    ebook_availability: {
      type: "boolean",
    },
  },
  required: [
    "id",
    "title",
    "isbn",
    "author",
    "synopsis",
    "num_pages",
    "ebook_availability",
  ],
  additionalProperties: false,
};

export const BooksSchema = {
  type: "array",
  items: _.merge(BookSchema),
};

export const CreatedBooksSchema = {
  type: "array",
  items: {
    type: "object",
    properties: {
      id: {
        type: "number",
      },
    },
  },
};
