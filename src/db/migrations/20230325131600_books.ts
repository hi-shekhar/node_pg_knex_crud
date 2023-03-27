import { Knex } from "knex";

export async function up(knex: Knex): Promise<void> {
  await knex.schema.createTable("books", (t) => {
    t.increments("id").primary();
    t.string("title", 400);
    t.string("isbn", 100);
    t.string("author", 400);
    t.text("synopsis");
    t.integer("num_pages");
    t.boolean("ebook_availability").defaultTo(false);
  });
}

export async function down(knex: Knex): Promise<void> {
  await knex.schema.dropTable("books");
}
