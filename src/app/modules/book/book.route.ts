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
router.post(
  '/review/:id',
  // validateRequest(BookValidation.createBookZodSchema),
  BookController.reviewBook
)

router.get('/review/:id', BookController.getBookReview)
router.get('', BookController.getAllBooks)
router.delete('/:id', BookController.deleteBook)

router.patch(
  '/:id',
  validateRequest(BookValidation.updateBookZodSchema),
  BookController.updateBook
)

export const BookRoutes = router
