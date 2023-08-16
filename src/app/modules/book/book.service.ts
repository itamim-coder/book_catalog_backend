import httpStatus from 'http-status'

import ApiError from '../../../errors/ApiError'
import { IBook } from './book.interface'
import { Book } from './book.model'
import { IPaginationOptions } from '../../../interfaces/pagination'
import { IGenericResponse } from '../../../interfaces/common'
import { paginationHelpers } from '../../../helpers/paginationHelper'
import { SortOrder } from 'mongoose'

const createBook = async (book: IBook): Promise<IBook | null> => {
  let createdBook: IBook | null = null

  try {
    createdBook = await Book.create(book)

    return createdBook
  } catch (error) {
    throw new ApiError(400, 'Failed to create Book')
  }
}

const getAllBooks = async (
 
  paginationOptions: IPaginationOptions
): Promise<IGenericResponse<IBook[]>> => {

  const { page, limit, skip, sortBy, sortOrder } =
    paginationHelpers.calculatePagination(paginationOptions)

  const andConditions: string | any[] = []

  // if (searchTerm) {
  //   andConditions.push({
  //     $or: BookSearchableFields.map(field => ({
  //       [field]: {
  //         $regex: searchTerm,
  //         $options: 'i',
  //       },
  //     })),
  //   })
  // }


  // if (Object.keys(filtersData).length) {
  //   andConditions.push({
  //     $and: Object.entries(filtersData).map(([field, value]) => ({
  //       [field]: value,
  //     })),
  //   })
  // }

  const sortConditions: { [key: string]: SortOrder } = {}

  if (sortBy && sortOrder) {
    sortConditions[sortBy] = sortOrder
  }
  const whereConditions =
    andConditions.length > 0 ? { $and: andConditions } : {}

  const result = await Book.find(whereConditions)

    .sort(sortConditions)
    .skip(skip)
    .limit(limit)

  const total = await Book.countDocuments(whereConditions)

  return {
    meta: {
      page,
      limit,
      total,
    },
    data: result,
  }

}


const getSingleBook = async (_id: string): Promise<IBook | null> => {
  const result = await Book.findOne({ _id })

  return result
}

const deleteBook = async (_id: string): Promise<IBook | null> => {
  const result = await Book.findByIdAndDelete(_id)

  return result
}

const updateBook = async (
  _id: string,
  payload: Partial<IBook>
): Promise<IBook | null> => {
  const isExist = await Book.findOne({ _id })

  if (!isExist) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Book not found !')
  }

  const { ...BookData } = payload

  const updatedBookData: Partial<IBook> = { ...BookData }

  const result = await Book.findOneAndUpdate({ _id }, updatedBookData, {
    new: true,
  })
  return result
}

export const BookService = {
  createBook,
  getAllBooks,
  getSingleBook,
  deleteBook,
  updateBook,
}
