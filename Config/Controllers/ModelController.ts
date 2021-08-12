import { Types } from 'mongoose'

interface ObjectHasID {
     _id?: string
}

export default class ModelController {
     private _model: MongooseModel

     constructor(model: MongooseModel) {
          this._model = model
     }

     public create = async (body: object) => {
          return await this._model.create(body)
     }

     public update = async (body: ObjectHasID, _id: string) => {
          return await this._model.updateOne({ _id: Types.ObjectId(_id) }, body)
     }

     public delete = async (_id: string) => {
          return await this._model.deleteOne({ _id: _id })
     }

     public findAll = async (query: object = {}) => {
          return await this._model.find(query)
     }

     public findById = async (_id: string) => {
          return await this._model.find({ _id: Types.ObjectId(_id) })
     }
}
