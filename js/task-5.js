const inputRef = document.querySelector('#name-input');
const titleSpanRef = document.querySelector('#name-output');

inputRef.addEventListener('input', hadleTextEnter);

function hadleTextEnter(event) {
  titleSpanRef.textContent = event.target.value;

  if (event.target.value === '') {
    titleSpanRef.textContent = 'незнакомец';
  }
}
