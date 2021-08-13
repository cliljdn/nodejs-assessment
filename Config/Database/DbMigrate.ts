require('dotenv').config()
import './Dbconnection'
import Migration from '../Controllers/MigrationController'
import userDetails from './seeds/UserSeeds'
const auth = require('../Controllers/AuthController')
const userModel = require('./Models/UserSchema')

try {
     const userMigration = new Migration(userModel)

     userMigration.hashPass(userDetails).then((data) => {
          userMigration.migrate(data)
     })
} catch (err) {
     console.log(err)
}
