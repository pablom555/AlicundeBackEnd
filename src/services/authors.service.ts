import { Types } from 'mongoose';
import { Author } from './../types/types';
import { getAuthor, getAuthors, saveAuthorDB } from '../db/dao/author.dao';

async function saveAuthor(authorData: Author) {

  const newAuthor = await saveAuthorDB(authorData);

  console.info(`Autor ${authorData.name} inserted successfully.`);

  return newAuthor

}

async function getAllAuthors(): Promise<any> {
  return getAuthors();
}

async function getAuthorById(id: Types.ObjectId): Promise<any> {
  return getAuthor(id);
}

export {
  saveAuthor,
  getAllAuthors,
  getAuthorById
}
