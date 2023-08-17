import mongoose from 'mongoose'
import { IGenericlogMessage } from '../interfaces/log'

const handleCastlog = (log: mongoose.log.Castlog) => {
  const logs: IGenericlogMessage[] = [
    {
      path: log.path,
      message: 'Invalid Id',
    },
  ]

  const statusCode = 400
  return {
    statusCode,
    message: 'Cast log',
    logMessages: logs,
  }
}

export default handleCastlog
