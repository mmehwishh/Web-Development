// // let a = 5;
// // console.log("Value of a is " + a +"and its type is " + typeof a)
// // let user = {
// //     name: "Mehwish",
// //     "obt marks": 93,
// //     pass: true
// // }
// // console.log(user)
// // user.salary=95000
// // console.log(user)

// // console.log("Now learning abt if & else")
// // let age = 45;
// // if(age<18) {
// //     console.log("Age is less than 18.");
// // } else if(age==18) {
// //     console.log("Age is equal to 18.")
// // } else {
// //     console.log("Age is not equal to 18.")
// // }
// // //let  c = a>b ? (a-b) : (b-1);
// // console.log("Loops Topic")

// //for in 
// for (const key in object) {
//     if (Object.prototype.hasOwnProperty.call(object, key)) {
//         const element = object[key];
        
//     }
// }

const item = { 
    "Harry": 95 , 
    "Mehwish": 100, 
    "Seerat" : 75
}

// for (const nam in item) {
//     console.log( nam + " "+item[nam])
//     //simple name -> names , object[name] -> marks
//     //for in -> objects
// }

//for of-> iterateale 
let a = ["apple" , "banana" , "mango"];
for (const element of a) {
    console.log(element)
}
