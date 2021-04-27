console.log("Ejecutando JavaScript...");

const video = document.getElementById("video");
const play = document.getElementById("play");
const big = document.getElementById("big");
const small = document.getElementById("small");
const time = document.getElementById("time2");

play.onclick = () => {
    if (video.paused) 
        video.play();
    else if (video.play){
        video.paused();
    }
}

big.onclick = () => {
    video.width = 500;
    video.heigth = 300;
}

small.onclick = () => {
    video.width = 300;
    video.heigth = 200;
}

time.onclick = () => {
    video.currentTime = 2;
}