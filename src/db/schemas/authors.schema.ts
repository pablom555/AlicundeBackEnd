import { Schema, model, Document, Types } from 'mongoose';
import { IBook } from './books.schema';

export interface IAuthor extends Document {
  name: string;
  books: Types.ObjectId[] | IBook[];
}

const authorSchema = new Schema<IAuthor>({
  name: { type: String, required: true },
  books: [{ type: Schema.Types.ObjectId, ref: 'Book' }],
});

export default model<IAuthor>('Author', authorSchema);
