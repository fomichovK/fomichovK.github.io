import clickMp3 from '../audio/click.mp3';

// sound

const body = document.querySelector('body');
const wrapper = document.createElement('div');
wrapper.classList.add('wrapper');
body.append(wrapper);

const title = document.createElement('h1');
title.textContent = 'Game rules';
wrapper.append(title);

const game = document.createElement('div');
game.classList.add('game');
wrapper.append(game);
const nav = document.createElement('div');
nav.classList.add('nav');
game.append(nav);

const shuffleButton = document.createElement('button'); // button shuffle
shuffleButton.classList.add('button');
shuffleButton.classList.add('shuffle');
shuffleButton.textContent = 'Shuffle and start';
nav.append(shuffleButton);

const soundButton = document.createElement('button'); // button sound
soundButton.classList.add('button');
soundButton.classList.add('sound_button');
soundButton.textContent = 'Sound';
nav.append(soundButton);

const save = document.createElement('button'); // button save
save.classList.add('button');
save.setAttribute('disabled', true);
save.textContent = 'Save';
nav.append(save);

const result = document.createElement('button'); // button result
result.classList.add('button');
result.setAttribute('disabled', true);
result.textContent = 'Result';
nav.append(result);
// count div
const countDiv = document.createElement('div'); // count div
countDiv.classList.add('count');
game.append(countDiv);

const spanClick = document.createElement('span'); // spanClick
spanClick.textContent = 'Moves: ';
countDiv.append(spanClick);

const itemClick = document.createElement('i'); // click count

itemClick.classList.add('clicks');
spanClick.append(itemClick);
const spanTime = document.createElement('span'); // spanClick;
spanTime.textContent = 'Time: ';
countDiv.append(spanTime);

const min = document.createElement('i'); //
min.classList.add('min');
spanTime.append(min);
const colon = document.createElement('i');
colon.textContent = ':';
spanTime.append(colon);

const sec = document.createElement('i'); //
sec.classList.add('sec');
spanTime.append(sec);

// game_field div

const gameField = document.createElement('div'); // game_field
gameField.classList.add('game_field');
game.append(gameField);

const frame = document.createElement('p'); // game frame
frame.classList.add('frame');
frame.textContent = '4x4';
game.append(frame);

const size = document.createElement('div');
size.classList.add('size');
game.append(size);

const sizeSpan = document.createElement('span');
sizeSpan.textContent = 'Other size: ';
size.append(sizeSpan);

const link3x3 = document.createElement('b');
link3x3.textContent = '3x3';
size.append(link3x3);

const link4x4 = document.createElement('b');
link4x4.textContent = '4x4';
size.append(link4x4);

/** logics */

// let cellSize = 25;

let clicks = 0;
let seconds = 0;
let minute = 0;
/** on/of  sound */
let togleSound = true;

const emptyCell = {
  top: 0,
  left: 0,
};

const arrCells = []; // массив
arrCells.push(emptyCell);

// count move
function countMove() {
  clicks += 1;
  itemClick.textContent = clicks;
}

function soundClick() {
  const audio = new Audio(); // Создаём новый элемент Audio
  audio.src = clickMp3; // Указываем путь к звуку "клика"
  audio.autoplay = togleSound; // переключение запускаем
}

// move cell
function move(index, cellSize) {
  const el = arrCells[index];

  const diffLeft = Math.abs(emptyCell.left - el.left);
  const diffTop = Math.abs(emptyCell.top - el.top);

  if (diffLeft + diffTop > 1) return;

  el.cell.style.top = `${emptyCell.top * cellSize}% `;
  el.cell.style.left = `${emptyCell.left * cellSize}% `;

  soundClick();

  const tempLeft = emptyCell.left;
  const tempTop = emptyCell.top;
  emptyCell.left = el.left;
  emptyCell.top = el.top;
  el.left = tempLeft;
  el.top = tempTop;

  countMove();
}
// shuffle arr
function shuffle(length) {
  const shuffleArr = [...Array(length).keys()];
  shuffleArr.sort(() => Math.random() - 0.5);
  return shuffleArr;
}
/** restart */
function restart() {
  // eslint-disable-next-line no-restricted-globals
  location.reload();

  //   gameMap(shuffle());
  //   clicks = 0;
  //   itemClick.textContent = clicks;
  //   seconds = 0;
  //   sec.textContent = `00`;
  //   minute = 0;
  //   min.textContent = `00`;
}

let cell = '';
function gameMap(arr, rows, vh) {
  for (let x = 1; x <= arr.length; x++) {
    cell = document.createElement('div');

    const left = x % rows;
    const top = (x - left) / rows;

    arrCells.push({
      left,
      top,
      cell,
    });

    cell.classList.add('numbers');
    cell.textContent = arr[x - 1] + 1;
    cell.style.top = `${top * vh}% `;
    cell.style.left = `${left * vh}% `;
    cell.style.width = `${vh}%`;
    cell.style.height = `${vh}%`;

    gameField.appendChild(cell);

    cell.addEventListener('click', () => move(x, vh));
  }
}
// timer
function timer() {
  setInterval(() => {
    seconds++;
    if (seconds <= 9) {
      sec.textContent = `0${seconds}`;
    }
    if (seconds > 9) {
      sec.textContent = `${seconds}`;
    }
    if (seconds >= 59) {
      seconds = 0;
      minute++;
    }

    if (minute < 9) {
      min.textContent = `0${minute}`;
    }
    if (minute > 9) {
      sec.textContent = `${minute}`;
    }
    if (seconds > 60) {
      minute = 0;
    }
  }, 1000);
}
gameMap(shuffle(15), 4, 25); // вызоп кнопок
// cellSize = 33.3;
// gameMap(shuffle(8), 3, 33.3);
function removeNum() {
  const el = document.querySelector('.game_field');
  while (el.firstChild) {
    el.firstChild.remove();
  }
}

timer();

// поле 3х3
link3x3.addEventListener('click', () => {
  removeNum();
  // cellSize = 33.3;
  gameMap(shuffle(8), 3, 33.3);
});

// поле 4х4
link4x4.addEventListener('click', () => {
  // cellSize = 25; // size in %
  removeNum();
  gameMap(shuffle(15), 4, 25);
});

itemClick.textContent = clicks;

shuffleButton.addEventListener('click', () => {
  restart();
});

soundButton.addEventListener('click', () => {
  togleSound = !togleSound;
  if (!togleSound) {
    soundButton.style.background = '#c3c3c3fc';
  } else {
    soundButton.style.background = '#0d9095';
  }
});
