const express = require('express')
const app = express()
const port = 3001

app.get('/', (req, res) => {
  res.send('Hello World2!')
})

app.get('/About', (req, res) => {
  res.send('About Mehwish')
})

app.get('/contact', (req, res) => {
  res.send('Contact')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
