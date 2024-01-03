const express = require('express')

const cors = require('cors')
const {connectDB} = require('./DB/connectDB')
const { UserRouter } = require('./View/userRoute')
const { EventRouter } = require('./View/eventRouter')

const app = express()

app.use(cors())

app.use(express.json())


app.use('/api/v1',UserRouter)
app.use('/api/v1/event',EventRouter)



let port = 4200;

const start =async ()=>{
    try {
        await connectDB()
        app.listen(port,'localhost',()=>{
            console.log('app is connected', port);
        })
    } catch (error) {
        console.log(error);
    }
}

start()