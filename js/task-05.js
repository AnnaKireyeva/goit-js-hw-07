const input = document.querySelector('input');
const nameOutput = document.querySelector('#name-output');
input.addEventListener('input', onInputChange);
function onInputChange(event) {
  //   console.log(event.currentTarget.value);
  if (event.currentTarget.value !== '') {
    nameOutput.textContent = event.currentTarget.value;
  } else {
    nameOutput.textContent = 'Незнакомец';
  }
}
