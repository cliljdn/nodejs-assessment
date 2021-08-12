import { Request, Response, NextFunction } from 'express'

interface ErrorObject {
     message: string
     stack: string
}

module.exports = {
     notFound: (req: Request, res: Response, next: NextFunction) => {
          const error = new Error(`Not Found - ${req.originalUrl}`)
          res.status(404)
          next(error)
     },

     // eslint-disable-next-line no-unused-vars
     errorHandler: (
          error: ErrorObject,
          req: Request,
          res: Response,
          next: NextFunction
     ) => {
          const statusCode = res.statusCode === 200 ? 500 : res.statusCode
          res.status(statusCode)
          res.json({
               message: error.message,
               stack:
                    process.env.NODE_ENV === 'production' ? '🥞' : error.stack,
          })
     },
}
