export interface Book {
  id: number;
  title: string;
  isbn: string;
  author: string;
  synopsis: string;
  num_pages: number;
  ebook_availability: boolean;
}

export interface createableBook {
  title: string;
  isbn: string;
  author: string;
  synopsis: string;
  num_pages: number;
  ebook_availability: boolean;
}
