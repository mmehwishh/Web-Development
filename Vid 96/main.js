import mongoose from "mongoose";
import express from "express"
import {Todo} from "./models/todo.js"
await mongoose.connect("mongodb://localhost:27017/todo")

const app = express()
const port = 3001
app.get("/todo", (req, res)=>{
    const todo = new Todo({
         name:"Mehwish",
        desc:"my first todo",
        isDone:"false"
    })
    todo.save()
    res.send("Hi im hey am i talkig")
})

app.get("/find", async(req, res)=>{
    let todo = await Todo.findOne({name:"Mehwish"})
    res.json({name:todo.name, desc:todo.desc, isDone:todo.isDone})
})

app.listen(port, ()=>{
    console.log(`listening to the port ${port}`)
})

