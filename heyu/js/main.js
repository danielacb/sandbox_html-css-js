const toggle = document.getElementById('toggle');
const menu = document.getElementById('menu');
const iconMenu = document.getElementById('menu-icons');
const play = document.getElementById('btn-play');
const video = document.getElementById('video');

toggle.onclick = () => {
    menu.classList.toggle('on');
    iconMenu.classList.toggle('off');
}

play.onclick = () => {
    video.play();
    play.classList.toggle('on');
    video.setAttribute('controls','controls');
}

video.onpause = () => {
    play.classList.toggle('on');
}

