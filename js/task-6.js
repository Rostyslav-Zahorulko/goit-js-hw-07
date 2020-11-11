const inputRef = document.querySelector('#validation-input');

function handleInputBlur(event) {
  const dataLength = event.target.getAttribute('data-length');

  if (event.target.value.length === Number(dataLength)) {
    inputRef.classList.add('valid');
  } else {
    inputRef.classList.add('invalid');
  }
}

inputRef.addEventListener('blur', handleInputBlur);
