import { Request, Response } from 'express';
import { Types } from 'mongoose';
import { saveBook, getAllBooks, getAveragePagesPerChapter } from '../services/books.service';
import { Book } from '../types/types';

async function saveBookController(req: Request, res: Response) {
  try {

    const { title, chapters, pages, author } = req.body;

    const bookData:Book = { title, chapters, pages, author };

    const bookDB = await saveBook(bookData);

    return res.status(200).send(bookDB);
    
  } catch (error) {    
    return res.status(500).send(`Error: ${error}`);
  }
}

async function getAllBooksController(req: Request, res: Response) {
  try {

    const booksDB = await getAllBooks();

    return res.status(200).send(booksDB);
    
  } catch (error) {    
    return res.status(500).send(`Error: ${error}`);
  }
}

async function getAveragePagesPerChapterController(req: Request, res: Response) {
  try {
    const bookId = req.params?.id;

    const average = await getAveragePagesPerChapter(bookId as unknown as Types.ObjectId);
    
    return res.status(200).send({average});
    
  } catch (error) {    
    return res.status(500).send(`Error: ${error}`);
  }
}

export { 
  saveBookController,
  getAllBooksController,
  getAveragePagesPerChapterController
}
