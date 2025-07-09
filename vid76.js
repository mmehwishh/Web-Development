//callBack -> argument as a function
// function getData(id, func) {
//     setTimeout(() => {
//         if (func) {
//             console.log(id);
//             func();
//         } else {
//             console.log(id);
//         }
//     }, 2000)
// }
//call back hell
// getData(1, () => {
//     getData(2, () => {
//         getData(3);
//     })
// })

//promises-> let p = new Promise((resolve , reject)=>{})
    //alogo -> function will return promise and then give result
function getdata(id) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Fetching " + id);
            resolve("Resolve")
        }, 2000)
    })

}

// IIEF
// (async function() {
//     await getdata(1)
//     await getdata(2)
//     await getdata(3)
// })()



// async method
// async function getAll() {
//     await getdata(1)
//     await getdata(2)
//     await getdata(3)
// }

//simple way of promise
// getdata(1).then((res)=>{
//     console.log("Resolved for data 1.")
//     getdata(2).then((res)=>{
//         console.log("Resolved for data 2.")
//     })
// })

//promise chaining

// getdata(1).then((res)=>{
//     console.log("Resolved for data 1.")
//     return getdata(2)
// }).then((res)=>{
//     console.log("Resolved for data 2.")
//     return getdata(3)
// }).then((res)=>{
//     console.log("Resolved for data 3.")
// })

// p1.catch((err)=>{
//     console.log("Rejected for data 1.")
// })

let BASE_URL = `https://jsonplaceholder.typicode.com/todos/1`
const get_data = async()=> {
    let x = await fetch(BASE_URL)
    let data = await x.json()
    console.log(data)
}

let a = prompt("Enter first number : ")
let b = prompt("Enter second number : ")
if(isNaN(a) || isNaN(b)) {
    throw SyntaxError("Not a number")
}
try {
    let c = a*x
    return true
} catch (error) {
    alert("Error agya bhai "+ error.name, error.message, error.stack )
    return false 
} finally {
    console.log("Files are closed")
}

