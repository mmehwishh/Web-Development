let express = require('express')
const app = express.Router()


app.get("/",(req, res)=>{
    res.send("Welcome to our shopping mall")
})
app.get("/about",(req,res)=>{
    res.send("Serving to 50 years")
})

module.exports = app
