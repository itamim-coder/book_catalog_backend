import { Model } from "mongoose";

export type IBook = {
    title: string;
    author: string;
    genre: string;
    publicationDate: string;
    reviews?: string[];
  }
  
  export type BookModel = Model<IBook, Record<string, unknown>>
  
  export type IBookFilters = {
    searchTerm?: string;
    // Add more filtering options if needed
  }
  