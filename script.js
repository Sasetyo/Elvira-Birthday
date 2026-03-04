// fade animation

const fades = document.querySelectorAll(".fade");

const observer = new IntersectionObserver(entries=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.classList.add("show");

}

});

});

fades.forEach(el=>observer.observe(el));



// tombol hadiah

document.getElementById("giftButton").onclick = ()=>{

window.location.href="LINK_DANA_KAGET";

};



// music

const music = document.getElementById("bgMusic");
const musicBtn = document.getElementById("musicBtn");

let play=false;

musicBtn.onclick=()=>{

if(!play){

music.play();
play=true;

}else{

music.pause();
play=false;

}

};