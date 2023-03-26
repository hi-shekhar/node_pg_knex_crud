import { Knex } from "knex";
import { createableBook } from "../../books/types";

const defaultBooks: createableBook[] = [
  {
    title: "book_1",
    isbn: "isbn_1",
    author: "author_1",
    synopsis: "synopsis_1",
    num_pages: 10,
    ebook_availability: true,
  },
  {
    title: "book_2",
    isbn: "isbn_2",
    author: "author_2",
    synopsis: "synopsis_2",
    num_pages: 100,
    ebook_availability: false,
  },
];
export async function seed(knex: Knex): Promise<void> {
  // Deletes ALL existing entries
  await knex("books").del();

  // Inserts seed entries
  await knex("books").insert(defaultBooks);
}
