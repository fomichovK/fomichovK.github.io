import gid from '../img/gid.jpg';
import birdsData from './dataBase';
import { level, randomId, score, count } from './script';
import { stop } from './audio';

import correct from '../sound/correct.mp3';
import fail from '../sound/fail.mp3';

const audioAnswer = new Audio();
audioAnswer.volume = 0.5;

const nextBtn = document.querySelector('.next');
const scoreCount = document.querySelector('.score-count');
const birdName = document.querySelector('.bird-name');
const birdDescription = document.querySelector('.bird-description');
const image = document.querySelector('.image');

export let isCorrect = false;

export function hideAnswer() {
  birdName.innerHTML = `**** <br> Угадай исполнителя`;

  birdDescription.textContent = '';
  image.src = gid;

  birdDescription.classList.remove('visible');
}

export function showAnswer(id = randomId) {
  birdName.textContent = birdsData[level][id].name;
  birdDescription.textContent = birdsData[level][id].description;
  image.src = birdsData[level][id].image;

  birdDescription.classList.add('visible');
}

export function getAnswer(id) {
  const birdItem = document.querySelectorAll('.bird-item');

  if (id - 1 === randomId) {
    showAnswer();
    const audio = document.querySelector('audio');
    score += count;
    scoreCount.textContent = score;
    birdItem[id - 1].style.color = 'green';
    birdItem[id - 1].style.background = 'rgb(94 93 93 / 33%)';
    count = 5;
    nextBtn.disabled = false;
    audio.pause();
    stop();
    audioAnswer.src = correct;
    audioAnswer.play();
    isCorrect = true;
  }

  if (id - 1 !== randomId) {
    if (!isCorrect) {
      audioAnswer.src = fail;
      audioAnswer.play();
      birdItem[id - 1].style.color = 'red';
    }
    showAnswer(id - 1);
    birdItem[id - 1].style.background = '#5e5d5d';
    count--;
  }
}
