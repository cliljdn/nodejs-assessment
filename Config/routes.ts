import { Express } from 'express'

module.exports = (app: Express) => {
     app.use(require('./Routes/middlewares').errorHandler)
     app.use(require('./Routes/middlewares').notFound)
}
