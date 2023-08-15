import express from 'express'
import validateRequest from '../../middlewares/validateRequest'


const router = express.Router()

// router.get('/:id', CowController.getSingleCow)
// router.post(
//   '',
//   validateRequest(CowValidation.createCowZodSchema),
//   CowController.createCow
// )

// router.get('', CowController.getAllCows)

// router.delete('/:id', CowController.deleteCow)

// router.patch(
//   '/:id',
//   validateRequest(CowValidation.updateCowZodSchema),
//   CowController.updateCow
// )

export const BookRoutes = router