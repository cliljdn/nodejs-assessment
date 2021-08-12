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
          try {
               const newUser = await this.create(req.body)

               if (newUser) res.json('user created')
          } catch (err) {
               next(err)
          }
     }

     public UserUpdateRoute = async (
          req: TypeRequest,
          res: TypeResponse,
          next: TypeNext
     ) => {
          try {
               const newUser = await this.update(req.body)

               if (newUser) res.json('user created')
          } catch (err) {
               next(err)
          }
     }
}

export default UserRoutes
