const inputRef = document.querySelector('#name-input');
const titleSpanRef = document.querySelector('#name-output');

inputRef.addEventListener('input', event => {
  titleSpanRef.textContent = event.target.value;
});
