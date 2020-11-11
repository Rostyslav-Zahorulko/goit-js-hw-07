const inputRef = document.querySelector('#font-size-control');
const textRef = document.querySelector('#text');

function handleFontSizeChange(event) {
  textRef.style.fontSize = `${Number(event.target.value)}px`;
}

inputRef.addEventListener('input', handleFontSizeChange);
