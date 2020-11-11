const inputRef = document.querySelector('#controls > input');
const createBtnRef = document.querySelector('[data-action="render"]');
const destroyBtnRef = document.querySelector('[data-action="destroy"]');
const boxesRef = document.querySelector('#boxes');

function createBoxes(amount) {
  const boxesArr = [];
  let boxWidth = 20;
  let boxHeight = 20;

  for (let i = 0; i < amount; i += 1) {
    const boxRef = document.createElement('div');

    boxWidth += 10;
    boxHeight += 10;

    boxRef.style.width = `${boxWidth}px`;
    boxRef.style.height = `${boxHeight}px`;

    boxRef.style.backgroundColor = `rgb(
      ${Math.random() * 255},
      ${Math.random() * 255},
      ${Math.random() * 255}
  )`;

    boxesArr.push(boxRef);
  }

  boxesRef.append(...boxesArr);
}

function destroyBoxes() {
  while (boxesRef.firstChild) {
    boxesRef.removeChild(boxesRef.firstChild);
  }
}

function handleCreateBtnClick() {
  const boxesAmount = inputRef.value;

  createBoxes(boxesAmount);

  inputRef.value = '';
}

function handleDestroyBtnClick() {
  destroyBoxes();
}

createBtnRef.addEventListener('click', handleCreateBtnClick);
destroyBtnRef.addEventListener('click', handleDestroyBtnClick);
