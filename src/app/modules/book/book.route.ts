import express from 'express'
import validateRequest from '../../middlewares/validateRequest'
import { BookValidation } from './book.validation'
import { BookController } from './book.controller'

const router = express.Router()

router.get('/:id', BookController.getSingleBook)
router.post(
  '',
  validateRequest(BookValidation.createBookZodSchema),
  BookController.createBook
)

router.get('', BookController.getAllBooks)

router.delete('/:id', BookController.deleteBook)

router.patch(
  '/:id',
  validateRequest(BookValidation.updateBookZodSchema),
  BookController.updateBook
)

export const BookRoutes = router
