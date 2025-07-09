let express = require('express')
let routerr = require('./routes/birds.js')
let shop = require('./routes/shop.js')

const app = express()
const port = 3002

// app.use(express.static("public"))
app.use("/blog" , routerr)
app.use("/shop", shop)
app.get("/", (req, res) => {
  console.log("Get request")
  res.send("HELLO IM GET REQ")
  //  res.sendFile('public/index.html', {root:__dirname})
}).post("/", (req, res) => {
  console.log("Post request")
  res.send("Res Put")
}).put("/", (req, res) => {
  console.log("Put request")
  res.send("Res Put")
})

app.get("/api", (req, res)=>{
  res.json({a:1 , b:2 , "name":"mehwish",marks: [90, 12, 23]})
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})