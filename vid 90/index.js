const express = require('express')
const app = express()
const port = 3000
app.set('view engine', 'ejs');


app.get("/", (req, res)=>{
    let siteName = "Cola Next"
    let search = "Hello, serach here"
    let arr = ["Mehwish", 1 , 5]
    // res.sendFile('./templates/index.html', {root:__dirname})
    res.render('index', {siteName:siteName, search, arr})
})

app.listen(port , ()=>{
    console.log(`Listening to the port ${port}`)
})