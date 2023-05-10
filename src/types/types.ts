import { IAuthor } from "../db/schemas/authors.schema";
import { IBook } from "../db/schemas/books.schema";

export type Book = Pick<IBook,'title' | 'chapters' | 'pages' | 'author'>;

export type Author  = Pick<IAuthor,'name'>;
