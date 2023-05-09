import { Request, Response } from 'express';
import { saveBook, getAllBooks, getAveragePagesPerChapter } from '../services/books.service';
import { IBook } from '../db/schemas/books.schema';

async function saveBookController(req: Request, res: Response) {
  try {

    const { id, title, chapters, pages} = req.body;
    const bookData: IBook = { id, title, chapters, pages };

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
    const average = await getAveragePagesPerChapter();
    
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
