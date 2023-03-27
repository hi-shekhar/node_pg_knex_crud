import { DB } from "../db/db";
import { Book, createableBook } from "./types";

export async function getAllBooks(): Promise<Book[]> {
  const result = await DB("books").select();
  return result;
}

export async function saveBooks(books: createableBook[]): Promise<number[]> {
  const result = await DB("books").insert(books).returning("id");
  return result;
}

export async function getBook(id: number): Promise<Book[]> {
  const result = await DB("books").select().where({
    id,
  });
  return result;
}

export async function updateBook(
  id: number,
  data: Partial<createableBook>
): Promise<Book[]> {
  const result = await DB("books")
    .update(data)
    .where({
      id,
    })
    .returning("*");
  return result;
}

export async function deleteBook(id: number): Promise<number> {
  const result = await DB("books").delete().where({
    id,
  });
  return result;
}
