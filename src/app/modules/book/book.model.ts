import { Schema, model } from 'mongoose'
import { BookModel, IBook } from './Book.interface'

const bookSchema = new Schema<IBook>(
  {
    title: { type: String, required: true },
    author: { type: String, required: true },
    genre: { type: String, required: true },
    publicationDate: { type: String, required: true },
    reviews: { type: [String], default: [] },
  },
  { timestamps: true }
)

export const Book = model<IBook, BookModel>('Book', bookSchema)
