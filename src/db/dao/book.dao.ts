import { Document, Types,  } from 'mongoose';
import Book, { IBook } from '../schemas/books.schema';
import Author, { IAuthor } from '../schemas/authors.schema';
import { Book as TBook } from '../../types/types';

async function saveBookDB (bookData: TBook): Promise<Document<unknown, any, TBook>> {

  const {title, chapters, pages, author: authorId} = bookData;

  const author: IAuthor | null = await Author.findById(authorId);

  if (!author) {
    throw new Error(`Author with ID ${authorId} not found`);
  }

  const book: IBook = new Book({
    title,
    chapters,
    pages,
    author: authorId,
  });

  await book.save();

  author.books.push(book._id);
  await author.save();

  return book;

}

async function getBooks (): 
  Promise<(Document<unknown, any, TBook> & TBook & {_id: Types.ObjectId;})[]> {
  return Book.find().populate('author', 'name');
}

async function getBook (id: Types.ObjectId): 
  Promise<(Document<unknown, any, TBook> & TBook & {_id: Types.ObjectId;}) | null> {
  return Book.findById(id);
}

export {
  saveBookDB,
  getBooks,
  getBook
}
