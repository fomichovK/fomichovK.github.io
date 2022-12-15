import { getAnswer } from './answers';
import birdsData from './dataBase';
import { level } from './script';

const answer = document.querySelector('.answer');

export function getListButtons() {
  birdsData[level].forEach((item) => {
    const listItem = document.createElement('li');
    listItem.classList = 'bird-item';
    listItem.innerText = item.name;
    answer.append(listItem);

    listItem.addEventListener('click', () => getAnswer(item.id));
  });
}
