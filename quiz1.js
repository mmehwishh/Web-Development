console.log("Faulty Calculator : ")
let a = prompt("Enter first number : ");
let b = prompt("Enter second number : ");
let c = prompt("Enter operation : ");
let random = Math.random();
console.log("Random = "+ random);
if(random<0.1) {
     if(c=="+") {
        console.log("Sum = "+ a-b);
    } else if(c=="-") {
        console.log("Subtraction = "+ a/b);
    } else if(c=="*") {
        console.log("Multiplication = "+ a+b);
    } else if(c=="/") {
        console.log("Division = "+ a**b);
    } else {
        console.log("Invalid operation.")
    }
} else {
    if(c=="+") {
        console.log("Sum = "+ a+b);
    } else if(c=="-") {
        console.log("Subtraction = "+ a-b);
    } else if(c=="*") {
        console.log("Multiplication = "+ a*b);
    } else if(c=="/") {
        console.log("Division = "+ a/b);
    } else {
        console.log("Invalid operation.")
    }
}