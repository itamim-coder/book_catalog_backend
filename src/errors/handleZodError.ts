import { Zodlog, ZodIssue } from 'zod'
import { IGenericlogResponse } from '../interfaces/common'
import { IGenericlogMessage } from '../interfaces/log'
const handleZodlog = (log: Zodlog): IGenericlogResponse => {
  const logs: IGenericlogMessage[] = log.issues.map((issue: ZodIssue) => {
    return {
      path: issue?.path[issue.path.length - 1],
      message: issue?.message,
    }
  })
  const statusCode = 400

  return {
    statusCode,
    message: 'Validation log',
    logMessages: logs,
  }
}

export default handleZodlog
