let first = document.querySelector(".hacking")

let array = ["Initializing Hacking",
    "Reading your Files",
    "Password files Detected",
    "Sending all passwords and personal files to server",
    "Cleaning up"]

const sleep = async () => {
    let random = Math.ceil(2 + Math.random() * 7);
    random *= 1000
    console.log(random)
    return new Promise((resolve, reject) => {
        setTimeout(() => { resolve() }, random)
    })

}


const add_data = async (data) => {
    await sleep()
    let para = document.createElement("p");
    para.innerHTML = data
    first.append(para);

}


const mainArray = async () => {
    let interval = setInterval(()=>{
        let p = document.querySelector(".hacking")
        if(p.lastElementChild.innerHTML.endsWith("...")) {
            p.lastElementChild.innerHTML = p.lastElementChild.innerHTML.slice(0 , -3)
        } else {
            p.lastElementChild.innerHTML = p.lastElementChild.innerHTML+"."
        }
        
    },400)

    for (const element of array) {
        await add_data(element)
    }
    sleep()
    clearInterval(interval)
}

mainArray();








