//call back function-> function inside function as an argument
const callback = (arg) => {
    console.log(arg)
}
const loadJs = (src, callback) => {
    let a = document.createElement("script")
    a.src = src
    a.onload = callback("Mehwish");
    document.head.append(a);
}

loadJs("https://cdnjs.cloudflare.com/ajax/libs/prism/9000.0.1/prism.min.js", callback);

