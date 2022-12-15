import { hideAnswer, isCorrect } from './answers';
import { stop, setAudio } from './audio';
import { getRandomId } from './rendom';
import { getListButtons } from './buttonList';
import { stage } from './stage';
import { restartGame } from './restart';

const birdDescription = document.querySelector('.bird-description');
const birdName = document.querySelector('.bird-name');
const sound = document.querySelector('.audio-player');
const next = document.querySelector('.next');
const restart = document.querySelectorAll('.restart');

export const randomId = 0;
export const level = 0;
export const score = 0;
export const count = 5;

function finish() {
  const item = document.querySelectorAll('.bird-item');
  const audio = document.querySelector('audio');
  const stage = document.querySelectorAll('.stage');
  isCorrect = false;
  if (level <= 5) {
    stage[level].classList.add('stage-activ');
    next.textContent = `next ${level + 1}/6`;

    next.disabled = true;
    stop();
    audio.remove();

    getRandomId(6);
    setAudio();

    item.forEach((el) => {
      el.remove();
    });
    hideAnswer();
    getListButtons();
  }
  if (level === 5) {
    next.textContent = `finish`;
  }
  if (level >= 6) {
    next.disabled = true;
    birdName.textContent = `Ваш результат ${score} из 30`;
    birdDescription.style.display = 'none';
    sound.style.display = 'none';
    audio.pause();
    if (score < 30) {
      const description = document.querySelector('.description');
      const restartBtn = document.createElement('button');
      restartBtn.textContent = 'Перезагрузить виктрорину?';
      restartBtn.className = 'restart';
      description.append(restartBtn);

      restartBtn.addEventListener('click', () => {
        restartGame();
      });
    }
  }
}

export function startGame() {
  stage();
  getRandomId(6);
  setAudio();
  getListButtons();
}

startGame();

next.textContent = `next ${level + 1}/6`;

next.addEventListener('click', () => {
  level++;
  finish();
});

console.log(`задание выполнено в полном обьеме за искдючением Extra scope -20`);
