import express from "express";
import mongoose from 'mongoose';
var cors = require('cors')
import blogrouter from "./routes/blog.route"

const app = express()
app.use(cors())
app.use(express.json());


app.get('/',(req,res)=>{
    res.send("hello pravin")
})

mongoose.connect('mongodb://localhost:27017/blogsdata')
.then(()=>{
    console.log("mongodb started")
}).catch(()=>{
    console.log("mongodb connection failed")
})

app.use('/blog',blogrouter)

app.listen(7000,(req,res)=>{
    console.log("server running")
})