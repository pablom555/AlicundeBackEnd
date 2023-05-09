import { Document, Types,  } from 'mongoose';
import Book from '../schemas/books.schema';
import { IBook } from '../schemas/books.schema';

async function saveBookDB (bookData: IBook): Promise<Document<unknown, any, IBook>> {
  const book = new Book();
  const {id, title, chapters, pages} = bookData;

  book.id = id;
  book.title = title;
  book.chapters = chapters;
  book.pages = pages;

  return book.save();
}

async function getBooks (): 
  Promise<(Document<unknown, any, IBook> & IBook & {_id: Types.ObjectId;})[]> {
  return Book.find();
}

export {
  saveBookDB,
  getBooks,
}
