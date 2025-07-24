const express = require('express');
const cors = require('cors');
const cookieParser = require('cookie-parser')
const mongoose = require('mongoose');
const userRoutes = require('./Routs/userrouts')

const app = express()

PORT=5000
process.env.URI="mongodb+srv://naniyadav621:abcd123456@cluster0.1keonsq.mongodb.net/mernAuth"

app.use(express.json())
app.use(cors())
app.use(cookieParser({Credential:true}))

app.use('/api',userRoutes)

mongoose.connect(process.env.URI)
.then(()=>console.log("DB connected sucessfully"))
.catch((err)=>console.log(err))



app.listen(PORT,(req,res)=>{
    console.log(`Server is running on port ${PORT}`)
})
