const express = require('express')
const { createEvent, getAllEvent, getSingleEvent, deleteEvent, getUserEvent } = require('../Controller/Event')
const { verifyToken } = require('../Middleware/verifyToken')




const EventRouter = express.Router()

EventRouter.post('/create',verifyToken,createEvent)
EventRouter.get('/allevent',getAllEvent)
EventRouter.get('/userevent',verifyToken,getUserEvent)
EventRouter.get('/:id',getSingleEvent)
EventRouter.delete('/:id',verifyToken,deleteEvent)

module.exports = {
    EventRouter
}