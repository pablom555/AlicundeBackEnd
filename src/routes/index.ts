import express, { Express } from 'express';
import booksRoutes from './books.route';

const appRoutes:Express = express();

appRoutes.use('/books', booksRoutes);

export default appRoutes;
