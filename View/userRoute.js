const express = require('express')
const { createUser, loginUser, getSingleUser } = require('../Controller/User')
const { verifyToken } = require('../Middleware/verifyToken')

const UserRouter = express.Router()

UserRouter.post('/signUp',createUser)
UserRouter.post('/login',loginUser)
UserRouter.get('/:id',verifyToken,getSingleUser)

module.exports = {
    UserRouter
}