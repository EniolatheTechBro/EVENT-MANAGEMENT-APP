const EventSchema = require('../Model/EventSchema')


const createEvent =async (req,res)=>{
    const {eventTitle,eventDescription,Category,StartDate,EndDate,Venue} = req.body
    const email = req.headers.useremail

    try {
        const Event = await EventSchema.create({eventTitle,eventDescription,Category,StartDate,EndDate,Venue,email})
        res.status(200).json(Event)
        console.log(Event);
    } catch (error) {
        res.status(500).json(error)
        console.log(error);
    }
}

const getAllEvent = async (req,res)=>{
    try {
        const event = await EventSchema.find()
        res.status(200).json(event)
    } catch (error) {
        res.status(500).json(error)
    }
}

const getSingleEvent = async (req,res)=>{
    const eventId = req.params.id
    try {
        const Event = await EventSchema.findById(eventId)
        res.status(200).json(Event)
    } catch (error) {
        res.status(500).json(error)
    }
}

const getUserEvent = async (req,res)=>{
    const email = req.headers.useremail

    try {
        const Event = await EventSchema.find({email:email})
        res.status(200).json(Event)
    } catch (error) {
        res.status(500).json(error)
        console.log(error);
    }
}


const deleteEvent = async (req,res)=>{
    const eventId = req.params.id
    try {
        await Event.findByIdAndDelete(eventId)
        res.status(500).json({message:'Deleted Successfully'})
        
    } catch (error) {
        res.status(500).json(error)
    }
}

module.exports = {
    createEvent,
    getAllEvent,
    getSingleEvent,
    deleteEvent,
    getUserEvent
}


