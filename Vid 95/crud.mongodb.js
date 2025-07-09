use('CRUDdb')
db.createCollection("courses")
db.courses.insertMany([
  {
    "name": "Mehwish",
    "price": 150,
    "assignments": 43,
    "project": 32
  },
  {
    "name": "Ali",
    "price": 200,
    "assignments": 35,
    "project": 28
  },
  {
    "name": "Sara",
    "price": 180,
    "assignments": 40,
    "project": 30
  },
  {
    "name": "Zain",
    "price": 170,
    "assignments": 38,
    "project": 25
  },
  {
    "name": "Hina",
    "price": 190,
    "assignments": 41,
    "project": 31
  },
  {
    "name": "Usman",
    "price": 160,
    "assignments": 39,
    "project": 29
  },
  {
    "name": "Nida",
    "price": 155,
    "assignments": 37,
    "project": 27
  },
  {
    "name": "Taha",
    "price": 210,
    "assignments": 44,
    "project": 33
  },
  {
    "name": "Areeba",
    "price": 165,
    "assignments": 42,
    "project": 30
  },
  {
    "name": "Fahad",
    "price": 175,
    "assignments": 36,
    "project": 26
  }
]
)
//FIND
// let a = db.courses.find({price:150})
// console.log(a.count())
//console.log(a.toArray())
//let b = db.courses.findOne({price:150})

//UPDATE
// db.courses.updateOne({price:150},{$set:{price:0}})
// db.courses.updateMany({price:150},{$set:{price:0}})

//DELETE
// db.courses.deleteOne({price:0})
// db.courses.deleteMany({price:0})


db.courses.find({price:{$lt:200}})