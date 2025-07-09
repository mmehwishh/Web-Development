let btn = document.getElementById("btn");
btn.addEventListener("click" , ()=> {
    let title = document.getElementById("title").value;
    createCard(title, "CodeWithHarry", 560000, 7, "31:22", "https://i.ytimg.com/vi/tVzUXW6siu0/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLACwWOixJVrKLFindK92kYMgTcQbw")
} )


function createCard(title, cName, views, monthsOld, duration, thumbnail) {
    let innerHTML = "";
    if(views>=1000 && views<1000000) {
        views = views/1000;
        views=views+"K"
    } 
    if(views>=1000000) {
        views = views+"M"
    }

    let a = `    <div class="container">
        <div class="img">
            <img src="${thumbnail}">
        </div>
        <div class="time">
            ${duration}
        </div>
        <div class="text">
             <h1>${title}</h1>
             <p>${cName} . ${views} . ${monthsOld} months ago</p>
        </div>
    </div>`
    innerHTML += a;
    document.body.innerHTML = innerHTML
}



