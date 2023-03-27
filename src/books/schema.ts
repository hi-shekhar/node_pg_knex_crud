import _ from "lodash";

export const createableBookSchema = {
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

export const updateBookSchema = {
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

export const booksSchema = {
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

export const booksSchemas = {
  type: "array",
  items: _.merge(booksSchema),
};
export const postBookSchema = {
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
