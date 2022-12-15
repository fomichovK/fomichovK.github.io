import birdsData from './dataBase';

export function stage() {
  const stageList = document.querySelector('.stageList');
  birdsData.forEach((item, index) => {
    const li = document.createElement('li');
    li.textContent = `stage ${index + 1}`;
    li.className = 'stage';

    if (index === 0) {
      li.classList.add('stage-activ');
    }
    stageList.append(li);
  });
}
