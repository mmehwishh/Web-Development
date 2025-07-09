console.log("Factorail");
let arr = [1,2,3,4,5,6];
// let arr = Array.from(Array(a+1).keys());

let fact=1;
for(i = 0 ; i<arr.length; i++ ){
    fact = fact*arr[i];
}
console.log("Factorial : "+fact)

const red = (a , b)=>{
    return a*b;
}
console.log(arr.reduce(red))