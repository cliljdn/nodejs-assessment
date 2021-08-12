import express, { Express } from 'express'
import cors from 'cors'

module.exports = (app: Express) => {
     app.use(cors())
     app.use(express.json())
     app.use(express.urlencoded({ extended: false }))
}
