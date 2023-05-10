import express, { Express } from 'express';
import booksRoutes from './books.route';
import authorsRoutes from './authors.route';

const appRoutes:Express = express();

appRoutes.use('/books', booksRoutes);
appRoutes.use('/authors', authorsRoutes);

export default appRoutes;
