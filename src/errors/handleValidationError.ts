import mongoose from 'mongoose'
import { IGenericlogResponse } from '../interfaces/common'
import { IGenericlogMessage } from '../interfaces/log'

const handleValidationlog = (
  log: mongoose.log.Validationlog
): IGenericlogResponse => {
  const logs: IGenericlogMessage[] = Object.values(log.logs).map(
    (el: mongoose.log.Validatorlog | mongoose.log.Castlog) => {
      return {
        path: el?.path,
        message: el?.message,
      }
    }
  )
  const statusCode = 400
  return {
    statusCode,
    message: 'Validation log',
    logMessages: logs,
  }
}

export default handleValidationlog
