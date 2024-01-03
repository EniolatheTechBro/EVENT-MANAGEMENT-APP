const mongoose = require('mongoose')
const mongoDBURL = 'mongodb+srv://ennyisrael:Test1234@cluster0.dq1xfx1.mongodb.net/FirstDatabase'
// const mongoDBURL2 = 'mongodb+srv://bobby:12345@cluster0.dq1xfx1.mongodb.net/FirstDatabase'

async function connectDB(){
    try {
        await mongoose.connect(mongoDBURL)
        console.log('connected to DB');
    } catch (error) {
        console.log(error);
    }
}

module.exports = {connectDB}