import { Document, Types,  } from 'mongoose';
import Author from '../schemas/authors.schema';
import { Author as TAuthor } from '../../types/types';

async function saveAuthorDB (authorData: TAuthor): Promise<Document<unknown, any, TAuthor>> {
  const author = new Author();
  const { name } = authorData;

  author.name = name;

  return (await author.save()).populate('books');
}

async function getAuthor (id: Types.ObjectId): 
  Promise<(Document<unknown, any, TAuthor> & TAuthor & {_id: Types.ObjectId;}) | null> {
  return Author.findById(id).populate('books');
}

async function getAuthors (): 
  Promise<(Document<unknown, any, TAuthor> & TAuthor & {_id: Types.ObjectId;})[]> {
  return Author.find().populate('books');
}

export {
  saveAuthorDB,
  getAuthors,
  getAuthor
}
