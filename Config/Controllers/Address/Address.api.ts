export {}
const express = require('express')
const router = express.Router()
const AddressController = require('./AddressRoutes')

router.post('/address/add', AddressController.addAddress)

router.patch('/address/update', AddressController.updateAddress)

router.delete('/address/delete', AddressController.deleteAddress)

module.exports = router
