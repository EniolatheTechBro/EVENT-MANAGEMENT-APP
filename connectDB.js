const mongoose = require('mongoose')
const mongoDBURL = require('./DB/DB')
async function connectDB(){
    try {
        await mongoose.connect(mongoDBURL)
        console.log('connected to DB');
    } catch (error) {
        console.log(error);
    }
}

module.exports = {connectDB}