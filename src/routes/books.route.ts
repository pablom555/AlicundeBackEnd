

import { Router } from 'express';
import { saveBookController, getAllBooksController, getAveragePagesPerChapterController } from '../controllers/books.controller';

const booksRoutes: Router = Router();

// Save a Book
booksRoutes.post('/', saveBookController);

// Get all holidays
booksRoutes.get('/', getAllBooksController);

// Get Average Chapter per Page
booksRoutes.get('/average-page-per-chapter', getAveragePagesPerChapterController);

export default booksRoutes;
