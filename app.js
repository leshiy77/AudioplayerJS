'use strict';

let isPlay = false;
let playNum = 0;

const audioLibrary = ['assets/audio/we-all-lift-together.mp3', 'assets/audio/kolybel-naya-gorya.mp3']
const audio = document.querySelector('audio');
function playAudio() {
    audio.src = audioLibrary[playNum];
    audio.currentTime = 0;
    audio.play();
    isPlay = true;
}
function pauseAudio() {
    if (audio.currentTime === 0) {
        pauseBtn.removeEventListener('click');
    }
    if (isPlay) {
        audio.pause();
        isPlay = false;
    } else {
        audio.play();
        isPlay = true;
    }
}
function stopAudio() {
    audio.pause();
    audio.currentTime = 0;
    isPlay = false;
}

function playNext() {
    playNum += 1;
    if (audioLibrary[playNum] === undefined) {
        playNum = 0;
    }
    if (isPlay) {
        playAudio();
    }
 }
function playPrev() {
    playNum -= 1;
    if (audioLibrary[playNum] === undefined) {
        playNum = 0;
    }
    if (isPlay) {
        playAudio()
    }
}

const playBtn = document.getElementById('play-btn');
const stopBtn = document.getElementById('stop-btn');
const pauseBtn = document.getElementById('pause-btn');
const prevBtn  = document.getElementById('prev-btn');
const nextBtn = document.getElementById('next-btn');
playBtn.addEventListener('click', playAudio);
stopBtn.addEventListener('click', stopAudio);
pauseBtn.addEventListener('click', pauseAudio);
prevBtn.addEventListener('click', playPrev);
nextBtn.addEventListener('click', playNext);

