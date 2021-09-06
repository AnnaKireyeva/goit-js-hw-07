const input = document.querySelector('#font-size-control');

const text = document.querySelector('#text');

text.style.fontSize = '50px';

input.addEventListener('input', fontSizeChange);

function fontSizeChange(event) {
  text.style.fontSize = event.currentTarget.value + 'px';
}
