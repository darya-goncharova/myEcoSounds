// Button


const playBtn = document.querySelector('.player-button');
const pauseBtn = document.querySelector('.pause-button');
const audio = new Audio();
const navItems =  document.querySelectorAll('.nav-link');
const navigation = document.querySelector('.header-container');
const backImage = document.querySelector('.main');

 


// Play Audio

let isPlay = false;
let currentAudioSrc = './assets/audio/forest.mp3';

function playAudio() {
  if(!isPlay) {
  audio.src = currentAudioSrc;
  audio.currentTime = 0;
  audio.play();
  isPlay = true;
  playBtn.classList.add('pause');
  }
 else {
    audio.pause();
    isPlay = false;
    playBtn.classList.remove('pause');
}
}


playBtn.addEventListener('click', playAudio);


// Change Button

navigation.classList.remove('bird_active');
navItems.forEach(element => {
  element.addEventListener('click', changeClassActive);
});
  function changeClassActive() {
    navigation.querySelector('.bird_active').classList.remove('bird_active');
    this.classList.add("bird_active");
    };





// Function ChangeImageButton

function ChangeImageButton(event) {
let currentAudiosrc = './assets/audio/forest.mp3';
const bird = event.target.getAttribute('data-bird');
 if (event.target.classList.contains('nav-link')){
currentAudioSrc = `./assets/audio/${bird}.mp3`;
backImage.style.backgroundImage = `url("./assets/img/${bird}.jpg")`;
 playAudio();
}
}

navigation.addEventListener('click', ChangeImageButton);

