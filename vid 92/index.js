const express = require('express')
const app = express()
const port = 3000
app.get('/', (req, res)=>{
    res.send("Sending request on server")
})

app.listen(port , ()=>{
    console.log(`Listening to the port ${port}`)
})