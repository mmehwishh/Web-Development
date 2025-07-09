import mongoose from "mongoose";
const todoSchema = new mongoose.Schema({
    name: { type: String, required: true, default: "hey" },
    desc:String,
    isDone:Boolean
});

export const Todo = mongoose.model('Todo', todoSchema);