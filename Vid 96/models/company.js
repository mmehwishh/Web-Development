import mongoose from "mongoose";
const employee = new mongoose.Schema({
    name:String,
    salary:Number
})

export const emp = new mongoose.model('Employee', employee)