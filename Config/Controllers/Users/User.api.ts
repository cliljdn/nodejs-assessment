const express = require('express')
const router = express.Router()
const UserController = require('./UserRoutes')

router.post('/user/login', UserController.login)

router.post('/user/register', UserController.register)

router.patch('/user/update', UserController.updateUser)

router.get('/user/profile', UserController.getProfile)

router.get('/user/test', (req: TypeRequest, res: TypeResponse) => {
     res.json('hahe')
})

module.exports = router
