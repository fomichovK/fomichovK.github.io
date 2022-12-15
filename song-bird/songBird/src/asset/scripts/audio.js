import birdsData from './dataBase';
import { player } from './player';
import { level, randomId } from './script';

const sound = document.querySelector('.audio-player');
const audio = document.createElement('audio');
const playStop = document.querySelector('.play-stop span');
const progressBar = document.querySelector('.progress-bar');
const progress = document.querySelector('.progress');
const volumeBar = document.querySelector('.volume-bar');
const volume = document.querySelector('.volume');

export function setAudio() {
  progressBar.style.width = 0;

  audio.src = birdsData[level][randomId].audio;
  sound.append(audio);
}

/** player */

let plaing = true;

function play() {
  audio.play();
  playStop.className = 'icon-pause';
  plaing = !plaing;
}

export function stop() {
  audio.pause();
  playStop.className = 'icon-play2';
  plaing = !plaing;
}

playStop.addEventListener('click', () => {
  if (plaing) {
    play();
  } else {
    stop();
  }
});
/** progress */
function updateProgress(e) {
  const currentTime = audio.currentTime;
  const duration = audio.duration;
  const progress = (currentTime / duration) * 100;
  progressBar.style.width = `${progress}%`;
}
audio.addEventListener('timeupdate', updateProgress);

function setProgress(e) {
  const width = this.clientWidth;
  const clickX = e.offsetX;
  const duration = audio.duration;
  audio.currentTime = (clickX / width) * duration;
}
progress.addEventListener('click', setProgress);
/** volume */

function setVolume(e) {
  const width = this.clientWidth;
  const clickX = e.offsetX;
  const volume = audio.volume;
  const level = (clickX / width) * 100;
  audio.volume = level / 100;

  volumeBar.style.width = `${(clickX / width) * 100}%`;
}
volume.addEventListener('click', setVolume);
