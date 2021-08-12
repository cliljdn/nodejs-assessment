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

     public update = async (body: ObjectHasID) => {
          return await this._model.updateOne({ _id: body._id }, body)
     }

     public delete = async (body: ObjectHasID) => {
          return await this._model.deleteOne({ _id: body._id })
     }

     public findAll = async () => {
          return await this._model.find({})
     }

     public findById = async (_id: string) => {
          return await this._model.find({ _id: _id })
     }
}
