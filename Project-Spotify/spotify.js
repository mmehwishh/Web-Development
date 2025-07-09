// console.log("Lets write javaScript")
let Nohas = [];
let audio = null
let current_li = null
let current_song = null
let previous_song = null
let next_song = null
let circle = document.querySelector(".circle")
let scroll = document.querySelector(".scroll")
let isdrag = false;
let prev_li = null
// //hamburger d
document.querySelector(".hamburger").addEventListener("click", () => {
    document.querySelector(".left").style.left = "0"
})

document.querySelector(".close").addEventListener("click", () => {
    document.querySelector(".left").style.left = "-100%"
})

document.querySelector(".volume").getElementsByTagName("input")[0].addEventListener("change", (e) => {
    console.log(e.target, e.target.value)
    audio.volume = parseInt(e.target.value) / 100
})
function reset() {
    document.querySelectorAll(".lib-song ul li").forEach(li => {
        li.querySelectorAll("img")[1].src = "img/play.svg";
    })
}


function formatTime(seconds) {
    const min = Math.floor(seconds / 60);
    const sec = Math.floor(seconds % 60);
    return `${min}:${sec < 10 ? "0" + sec : sec}`;
}

function getTitle(element) {
    let currentFile = element.src.split("/").pop();
    for (const obj of Nohas) {
        if (obj.file == currentFile) {
            return obj.title
        }
    }
    return null
}
previous.addEventListener("click", () => {
    let fileName = audio.src.split("/").pop(); // example: noha2.mp3
    let index = Nohas.findIndex(obj => obj.file === fileName);

    if (index - 1 >= 0) {
        console.log(Nohas[index - 1].title);
        Array.from(document.querySelector(".lib-song").getElementsByTagName("li")).forEach(e => {
            if (e.getElementsByTagName("p")[0].innerHTML == Nohas[index - 1].title) {
                playMusic(Nohas[index - 1].title, e)
            }
        })

    }
})
next.addEventListener("click", () => {
    let fileName = audio.src.split("/").pop(); // example: noha2.mp3
    let index = Nohas.findIndex(obj => obj.file === fileName);


    if (index + 1 < Nohas.length) {
        console.log(Nohas[index + 1].title);
        Array.from(document.querySelector(".lib-song").getElementsByTagName("li")).forEach(e => {
            if (e.getElementsByTagName("p")[0].innerHTML == Nohas[index + 1].title) {
                playMusic(Nohas[index + 1].title, e)
            }
        })

    }

})

function playMusic(Noha, element) {
    prev_li = current_li
    current_li = element
    let play_noha;
    let curr_noha_obj;
    for (const element of Nohas) {
        if (element.title == Noha) {
            curr_noha_obj = element
            play_noha = "songs/" + element.artist + "/" + element.file
            break
        }
    }
    if (audio) {
        reset()
        play.src = "img/play.svg";
        previous_song = audio
        audio.pause();
        audio.currentTime = 0;
        let currentFile = audio.src.split("/").pop();
        let newFile = play_noha.split("/").pop();
        if (currentFile == newFile) {
            element.innerHTML = `
                                    <img src="img/music.svg" alt="" class="music">
                                    <div class="song-art">
                                        <p>${Noha}</p>
                                        <p>${curr_noha_obj.artist}</p>
                                    </div>       
                                    <img src="img/play.svg" alt="" class="play-pause">
                                    `
            current_song = null
            audio = null
            return
        }

    }
    current_li = element
    audio = new Audio(play_noha)
    element.innerHTML = ` 
                        <img src="img/music.svg" alt="" class="music">
                        <div class="song-art">
                            <p>${Noha}</p>
                            <p>${curr_noha_obj.artist}</p>
                        </div>
                                                
                        <img src="img/pause.svg" alt="" class="play-pause">
                        `
    document.getElementById("play").src = "img/pause.svg"
    current_song = Noha

    document.querySelector(".song-name").innerHTML = `${Noha}`
    audio.play()
    if (previous_song == null) {
        previous_song = audio
        prev_li = current_li
    }
    audio.addEventListener("timeupdate", () => {
        if (!isdrag) {
            let progress = (audio.currentTime / audio.duration) * 100
            document.querySelector(".circle").style.left = `${progress}%`
        }

        document.querySelector(".song-duration").innerHTML = formatTime(audio.currentTime) + "/" + formatTime(audio.duration);
    });

    scroll.addEventListener("click", (e) => {
        let position = (e.offsetX / scroll.getBoundingClientRect().width) * 100
        document.querySelector(".circle").style.left = position + "%"
        audio.currentTime = (e.offsetX / scroll.getBoundingClientRect().width) * audio.duration
    })






}

async function LoadNoha(folder) {
    let song_ul = document.querySelector(".lib-song ul")
    const res = await fetch("info.json")
    const data = await res.json()
    for (const art of data.artists) {
        if (art.name == folder) {
            for (const song of art.songs) {
                Nohas.push(song)
            }
        }
    }


    for (const element of Nohas) {
        song_ul.innerHTML = song_ul.innerHTML + ` <li>
                                                <img src="img/music.svg" alt="" class="music">
                                                <div class="song-art">
                                                    <p>${element.title}</p>
                                                    <p>${element.artist}</p>
                                                </div>
                                                
                                                <img src="img/play.svg" alt="" class="play-pause">
                                                </li>`
    }

    Array.from(document.querySelector(".lib-song").getElementsByTagName("li")).forEach(e => {
        e.addEventListener("click", (element) => {
            playMusic(e.getElementsByTagName("p")[0].innerHTML, e)
        })
    })

    // event listener for play, previous and next
    play.addEventListener("click", () => {
        if (current_song) {
            console.log(current_song)
            if (audio.paused) {
                if (current_li) {
                    current_li.querySelectorAll("img")[1].src = "img/pause.svg"
                }
                audio.play();
                play.src = "img/pause.svg";
            } else {
                audio.pause();
                play.src = "img/play.svg";
                reset()
            }
        }
    })

}

async function display_album() {
    let card_container = document.querySelector(".card-container")

    const a = await fetch("info.json")
    const res = await a.json()
    for (const art of res.artists) {
        card_container.innerHTML = card_container.innerHTML + `<div class="card">
                                                            <i class="fa-solid fa-play play" style="color: black; 
                                                                background-color: #1fdf64; 
                                                                padding: 10px; 
                                                                border-radius: 50%; 
                                                                font-size: 16px;"></i>

                                                            <img src="songs/${art.name}/${art.name}.jpg" alt="${art.name}">
                                                            <h2>${art.name}</h2>
                                                            <p>Hits to boost your mood and fill with happiness!</p>
                                                            </div>`
    }

    Array.from(document.querySelectorAll(".card")).forEach(div => {
        let folder_name
        div.addEventListener("click", (e) => {
            folder_name = div.getElementsByTagName("h2")[0].innerHTML
            let song_ul = document.querySelector(".lib-song ul")
            song_ul.innerHTML = " "
            Nohas.length = 0;
            LoadNoha(folder_name)
        })
    })

}
display_album()

