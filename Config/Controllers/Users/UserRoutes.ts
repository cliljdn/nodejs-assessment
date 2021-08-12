import ModelController from '../ModelController'

class UserRoutes extends ModelController {
     constructor(model: MongooseModel) {
          super(model)
     }

     public UserCreateRoute = async (
          req: TypeRequest,
          res: TypeResponse,
          next: TypeNext
     ) => {
          const newUser = await this.create(req.body)

          if(newUser) 
     }
}

export default UserRoutes
