const express = require('express')
const file = require("fs")
const app = express()
const port = 3000

//middleware m1
app.use((req, res , next)=>{
    console.log(req)
    console.log(req.headers)
    req.mehwish = " Mehwish , I am"
    file.appendFileSync("log.text", `Middleware1 ${Date.now()} and ${req.method}\n`)
    // file.writeFileSync("log.text", `Middleware1 ${Date.now()} and ${req.method}`)
    console.log(`Middleware1 ${Date.now()} and ${req.method}`)
    next()
})

//middleware m2
app.use((req, res , next)=>{
    console.log("Middleware 2")
    next()
})

app.get("/", (req, res)=>{
    res.send("starting server"+req.mehwish)
})

app.listen(port , ()=>{
    console.log(`Listening to the port ${port}`)
})