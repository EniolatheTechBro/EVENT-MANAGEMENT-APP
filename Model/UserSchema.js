const mongoose = require('mongoose')

const {Schema} = mongoose

const UserSchema = Schema({
    name:{
        type:String,
        required:true,
        trim:true
    },
    email:{
        type:String,
        required:true,
        unique:true,
        lowercase:true,
        trim:true
    },
    password:{
        type:String,
        required:true,
        minlength:5
    }
})

const EventUser = mongoose.model('EventUser',UserSchema)

module.exports = EventUser