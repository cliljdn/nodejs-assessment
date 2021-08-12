import { Schema, Document, model } from 'mongoose'
const schemaNames = require('../../Constants/SchemaNames')

const stringRequired: object = {
     type: String,
     require: true,
}

interface UserInterface extends Document {
     fname: string
     lname: string
     contact_number: string
     email: string
     department?: object
     timestamps: string
}

const UserSchema: Schema = new Schema(
     {
          fname: stringRequired,
          lname: stringRequired,
          contact_number: stringRequired,
          email: stringRequired,
          department: {
               type: Schema.Types.ObjectId,
               ref: schemaNames.departmentSchema,
          },

          address: {
               type: Schema.Types.ObjectId,
               ref: schemaNames.addressSchema,
          },
     },
     { timestamps: true }
)

module.exports = model<UserInterface>(schemaNames.userSchema, UserSchema)
