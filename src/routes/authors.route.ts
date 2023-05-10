
import { Router } from 'express';
import { getAllAuthorsController, saveAuthorController } from '../controllers/authors.controllers';

const booksRoutes: Router = Router();

// Save a Author
booksRoutes.post('/', saveAuthorController);

// Get all Authors
booksRoutes.get('/', getAllAuthorsController);

export default booksRoutes;
