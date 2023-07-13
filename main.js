require("dotenv").config()
const mongoose = require('mongoose')
const express = require('express')
const app = express()
const router = require('./Routers/EmployeeRouters')

app.use(express.json())
app.use('/api/Employee',router)
mongoose.connect(process.env.MONGO_URI).then(()=>{
    console.log('Connted to DB')
    const port = process.env.PORT
    app.listen(port,(err)=>{
        if (err) throw err;
        console.log(`Server is runnig on port: ${port}`)
    })
}).catch((err)=>{
    console.log(err)
})