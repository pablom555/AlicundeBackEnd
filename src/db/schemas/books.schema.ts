import { Schema, model, Document, Types } from 'mongoose';
export interface IBook extends Document {
  title: string;
  chapters: number;
  pages: number;
  author: Types.ObjectId;
}

const bookSchema = new Schema<IBook>({
    title: { type: String, required: [true, 'The title is required'] },
    chapters: { type: Number, required: [true, 'The chapters is required'] },
    pages: { type: Number, required: [true, 'The pages is required'] },
    author: { type: Schema.Types.ObjectId, required: true, ref: 'Author' },
});


export default  model<IBook>('Book', bookSchema);
