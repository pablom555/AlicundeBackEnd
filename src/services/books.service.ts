import { Types } from 'mongoose';
import { Book } from './../types/types';
import { saveBookDB, getBooks, getBook } from '../db/dao/book.dao';
import { getAuthorById } from './authors.service';

async function saveBook(bookData: Book) {

  const authorDb = await getAuthorById(bookData.author);

  if (!authorDb) {
    throw new Error('The Author does not exist');
  }

  const newBook = await saveBookDB(bookData);

  console.info(`Book ${bookData.title} inserted successfully.`);

  return newBook

}

async function getAllBooks(): Promise<any> {
  return getBooks();
}

async function getAveragePagesPerChapter(bookId: Types.ObjectId): Promise<number> {
  const book = await getBook(bookId);

  if (!book) {
    throw new Error(`Book with ID ${bookId} not found`);
  }

  const averagePagesPerChapter = book.pages / book.chapters;
  return averagePagesPerChapter;
}


export {
  saveBook,
  getAllBooks,
  getAveragePagesPerChapter
}
