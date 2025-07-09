//repetitive task afte some timee

function randomColor() {
    let val1 = Math.ceil(0+Math.random()*255);
    let val2 = Math.ceil(0+Math.random()*255);
    let val3 = Math.ceil(0+Math.random()*255);
    return `rgb(${val1}, ${val2}, ${val3})`
}
let a = setInterval(()=>{
let c = document.querySelector(".box");
c.style.background= randomColor();
}, 1000)

console.log(a)

//clearInterval(1)

//only once

let b = setTimeout(()=>{
    let c = document.querySelector(".box1");
    c.style.background = randomColor();
}, 2000)
console.log(b)

//clearTimeout(2)