const input = document.querySelector('#validation-input');

input.addEventListener('blur', checkInputSymbolsAmount);

function checkInputSymbolsAmount() {
  const symbolsAmount = Number(input.dataset.length);
  if (input.value.length === symbolsAmount) {
    input.classList.add('valid');
    input.classList.remove('invalid');
  } else {
    input.classList.remove('valid');
    input.classList.add('invalid');
  }
}
