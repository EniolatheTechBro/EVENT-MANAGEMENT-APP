const mongoose = require('mongoose')

const {Schema} = mongoose

const EventSchema = Schema({
    eventTitle:{
        required:true,
        type:String,
        unique:true,
        lowercase:true,
        minlength:5,
        trim:true
    },
    eventDescription:{
        required:true,
        type:String,
        unique:true,
        lowercase:true,
        minlength:10,
        trim:true 
    },
    Category:{
        required:true,
        type:String,
        lowercase:true,
        minlength:3,
        trim:true 
    },
    Venue:{
        required:true,
        type:String,
        lowercase:true,
        minlength:5,
        trim:true 
    },
    StartDate:{
        required:true,
        type:String,
    },
    EndDate:{
        required:true,
        type:String,
    },
    email:{
        type:String,
        lowercase:true
    }
})

const Event = mongoose.model('Event',EventSchema)

module.exports = Event