import { Request, Response } from 'express';
import { Author } from '../types/types';
import { getAllAuthors, saveAuthor } from '../services/authors.service';

async function saveAuthorController(req: Request, res: Response) {
  try {

    const { name } = req.body;
    const authorData:Author = { name };

    const authorDB = await saveAuthor(authorData);

    return res.status(200).send(authorDB);
    
  } catch (error) {    
    return res.status(500).send(`Error: ${error}`);
  }
}

async function getAllAuthorsController(req: Request, res: Response) {
  try {

    const authorsDB = await getAllAuthors();

    return res.status(200).send(authorsDB);
    
  } catch (error) {    
    return res.status(500).send(`Error: ${error}`);
  }
}

export { 
  saveAuthorController,
  getAllAuthorsController,
}
