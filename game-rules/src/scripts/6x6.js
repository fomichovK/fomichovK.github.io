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

const messig = document.createElement('div'); //
messig.classList.add('messig');
messig.innerText = 'Empty field must come first';
countDiv.append(messig);

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

const link3x3 = document.createElement('a');
link3x3.textContent = '3x3';
link3x3.setAttribute('href', './game3x3.html');
size.append(link3x3);

const link4x4 = document.createElement('a');
link4x4.textContent = '4x4';
link4x4.setAttribute('href', './index.html');
size.append(link4x4);

const link5x5 = document.createElement('a');
link5x5.textContent = '5x5';
link5x5.setAttribute('href', './game5x5.html');
size.append(link5x5);

const link6x6 = document.createElement('a');
link6x6.textContent = '6x6';
link6x6.setAttribute('href', './game6x6.html');
size.append(link6x6);

const link7x7 = document.createElement('a');
link7x7.textContent = '7x7';
link7x7.setAttribute('href', './game7x7.html');
size.append(link7x7);

const link8x8 = document.createElement('a');
link8x8.textContent = '8x8';
link8x8.setAttribute('href', './game8x8.html');
size.append(link8x8);

/** logick */

const cellSize = 16.7; // size in %
const lengthArr = 35; // 6x6
const rows = 6; // количество рядов и строк
const className = 'six_numbers'; // klass

let clicks = 0;
let seconds = 0;
let minute = 0;
/**on/of  sound*/
let togleSound = true;

const emptyCell = {
  value: 0,
  top: 0,
  left: 0,
};

let arrCells = []; // массив
arrCells.push(emptyCell);

// count move
function countMove() {
  clicks += 1;
  itemClick.textContent = clicks;
}
// sound

function soundClick() {
  const audio = new Audio(); // Создаём новый элемент Audio
  audio.src = './src/audio/click.mp3'; // Указываем путь к звуку "клика"
  audio.autoplay = togleSound; // переключение запускаем
}

// move cell
function move(index) {
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
  const isFinish = arrCells.every((cell) => {
    return cell.value == cell.top * rows + cell.left;
  });

  if (isFinish) {
    const popUpShadow = document.createElement('div');
    popUpShadow.classList.add('popUpShadow');
    body.append(popUpShadow);

    const popUp = document.createElement('div');
    popUp.classList.add('popUp');
    popUp.innerText = ` Hooray! You solved the puzzle in ${minute} : ${seconds} and ${clicks} moves`;
    popUpShadow.append(popUp);
    popUpShadow.append(shuffleButton);
  }
}
// shuffle arr
function shuffle() {
  return (shuffleArr = [...Array(lengthArr).keys()].sort(() => Math.random() - 0.5));
}
/**restart*/
function restart() {
  location.reload();

  //   gameMap(shuffle());
  //   clicks = 0;
  //   itemClick.textContent = clicks;
  //   seconds = 0;
  //   sec.textContent = `00`;
  //   minute = 0;
  //   min.textContent = `00`;
}

//
function gameMap(arr) {
  for (let x = 1; x <= lengthArr; x++) {
    const cell = document.createElement('div');
    const value = arr[x - 1] + 1;
    let left = x % rows;
    let top = (x - left) / rows;

    arrCells.push({
      value: value,
      left: left,
      top: top,
      cell: cell,
    });

    cell.classList.add(className);
    cell.textContent = value;
    cell.style.top = `${top * cellSize}% `;
    cell.style.left = `${left * cellSize}% `;

    gameField.append(cell);

    cell.addEventListener('click', () => move(x));
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

itemClick.textContent = clicks;

shuffleButton.addEventListener('click', () => {
  restart();
});

gameMap(shuffle());

timer();

soundButton.addEventListener('click', () => {
  togleSound = !togleSound;
  if (!togleSound) {
    soundButton.style.background = '#c3c3c3fc';
  } else {
    soundButton.style.background = '#0d9095';
  }
});
frame.textContent = '3x3';
