import { Model, Schema, Types, Document } from 'mongoose'
import { Request, Response, NextFunction } from 'express'

declare function ExpressRoute(req: Request, res: Response, next: NextFunction)
declare global {
     type MongooseModel = Model<Schema>

     type TypeRequest = Request

     type TypeResponse = Response

     type TypeNext = NextFunction
}
