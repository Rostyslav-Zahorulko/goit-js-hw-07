const inputRef = document.querySelector('#validation-input');

inputRef.addEventListener('blur', handleInputBlur);
inputRef.addEventListener('focus', handleInputFocus);

function handleInputBlur(event) {
  const dataLength = event.target.getAttribute('data-length');

  if (event.target.value.length === Number(dataLength)) {
    inputRef.classList.add('valid');
  } else {
    inputRef.classList.add('invalid');
  }
}

function handleInputFocus() {
  inputRef.classList.remove('valid') || inputRef.classList.remove('invalid');
}
