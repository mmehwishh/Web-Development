
let selector = document.querySelectorAll(".dropdown select")
let flag1 = document.querySelector(".from img")
console.log(flag1)
let flag2 = document.querySelector(".to img")
console.log(flag2)
let btn = document.querySelector(".btn button")
const fromCurr = document.querySelector(".from select")
const toCurr = document.querySelector(".to select")
const exchangeURL = "https://raw.githubusercontent.com/WoXy-Sensei/currency-api/main/api";

let input = document.querySelector(".amount input")

for (const select of selector) {
    for (const code in countryList) {
        let create = document.createElement("option")
        create.value = code
        create.innerHTML = code
        select.append(create)

        if(select.name==="from" && countryList[code]==="PK" ) {
            create.selected = true;
        }

        if(select.name==="to" && countryList[code]==="US" ) {
            create.selected = true;
        }        
    }
    select.addEventListener("change" , (evt)=>{
        console.log(evt.target.className)
        // console.log(evt.target.classList)
            updateFlag(evt.target);
        })
}


function updateFlag(element) {
    let cname = element.value
    if(element.className==="select-from") {
        console.log(element.className)
        let newSrc = `https://flagsapi.com/${countryList[cname]}/flat/64.png`
        flag1.src = newSrc
    } if(element.className==="select-to") {
        let newSrc = `https://flagsapi.com/${countryList[cname]}/flat/64.png`
        flag2.src = newSrc
    }    
}

async function exchangeRate() {
    let amount = input.value
    // /USD_EUR.json
    const URL = `${exchangeURL}/${fromCurr.value}_${toCurr.value}.json`;
    let response = await fetch(URL)
    let data = await response.json()
    let rate = data[toCurr.value.toLowerCase()];

    let final = rate * amount
    let msg = document.querySelector(".msg p")
    msg.innerHTML = `${amount} ${fromCurr.value} = ${final} ${toCurr.value}`
}

addEventListener("click", (evt)=>{
    evt.preventDefault();
    exchangeRate();
})

window.addEventListener("load" , ()=>{
    exchangeRate();
})