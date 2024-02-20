const express = require('express')
const userController = require('../controller/user')
const route= express.Router()

route.post('/registerUser',userController.registerUser);
route.post('/login',userController.login);


module.exports = route