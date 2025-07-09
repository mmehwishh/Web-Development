

// Select the database to use.
use('sigmaDatabase');

// Insert a few documents into the sales collection.
db.getCollection('courses').insertMany([
  {
    "name": "Java",
    "price": 2000,
    "Instructor": "Harry2"
  },
  {
    "name": "Python",
    "price": 2500,
    "Instructor": "Alice"
  },
  {
    "name": "Web Development",
    "price": 3000,
    "Instructor": "John"
  },
  {
    "name": "Machine Learning",
    "price": 4000,
    "Instructor": "Sara"
  },
  {
    "name": "Data Structures",
    "price": 2200,
    "Instructor": "Mike"
  }
]
);


// Print a message to the output window.
console.log("Done inserting data");

