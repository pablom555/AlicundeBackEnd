

import { Router } from 'express';
import { saveBookController, getAllBooksController, getAveragePagesPerChapterController } from '../controllers/books.controller';

const booksRoutes: Router = Router();

// Save a Book
booksRoutes.post('/', saveBookController);

// Get all books
booksRoutes.get('/', getAllBooksController);

// Get Average Page per Chapter
booksRoutes.get('/average-page-per-chapter/:id', getAveragePagesPerChapterController);

export default booksRoutes;
