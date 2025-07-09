const router = require('express')
const blog = router.Router()

blog.get("/", (req, res)=>{
    res.send("Birds are getting")
})

blog.get("/about", (req, res)=>{
    res.send("Birds About")
})

blog.get('/about/:slug', (req, res)=>{
    res.send(`Birds About ${req.params.slug}`)
})

module.exports = blog 

