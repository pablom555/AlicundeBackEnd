import mongoose, { Schema } from 'mongoose';

export interface IBook {
  id: string;
  title: string;
  chapters: number;
  pages: number;
}

const booksSchema: Schema = new Schema({
    id: { type: String, required: [true, 'The id is required'] },
    title: { type: String, required: [true, 'The title is required'] },
    chapters: { type: Number, required: [true, 'The chapters is required'] },
    pages: { type: Number, required: [true, 'The pages is required'] },
});


export default  mongoose.model<IBook>('Book', booksSchema);
