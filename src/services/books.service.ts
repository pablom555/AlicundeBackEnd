import { saveBookDB, getBooks } from '../db/dao/book.dao';
import { IBook } from "../db/schemas/books.schema";

async function saveBook(bookData: IBook) {
  console.log('pasapor aca', bookData);

  try {

    const newBook = await saveBookDB(bookData);

    console.info(`Book ${bookData.title} inserted successfully.`);
 
    return newBook
  } catch (error) {
    console.error(error);
  }
}

async function getAllBooks(): Promise<any> {
  return  getBooks();
}

async function getAveragePagesPerChapter(): Promise<number> {
  const books = await getBooks();

  //Calculate Average page per chapter
  return 10;
}


export {
  saveBook,
  getAllBooks,
  getAveragePagesPerChapter
}
