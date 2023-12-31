import express, { Application, NextFunction, Request, Response } from 'express'
import cors from 'cors'
import ApiError from './errors/ApiError'
import globalErrorHandler from './app/middlewares/globalErrorHandler'
import routes from './routes'
import httpStatus from 'http-status'
const app: Application = express()

app.use(cors())
//parser
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

//application routes

app.use('/api/v1/', routes)

//handle not found
app.use((req: Request, res: Response, next: NextFunction) => {
  res.status(httpStatus.NOT_FOUND).json({
    success: false,
    message: 'Not Found',
    errorMessages: [
      {
        path: req.originalUrl,
        message: 'API Not Found',
      },
    ],
  })
  next()
})

// app.get('/', async (req: Request, res: Response, next: NextFunction) => {
//   // res.send('Working Successfully')
//   throw new ApiError(400,'Testing Error logger')
// })

app.use(globalErrorHandler)

export default app
