const decrement = document.querySelector('[data-action="decrement"]');

const increment = document.querySelector('[data-action="increment"]');

const text = document.querySelector('#value');

let counterValue = 0;

increment.addEventListener('click', () => {
  counterValue += 1;
  console.log(counterValue);
  text.textContent = counterValue;
});

decrement.addEventListener('click', () => {
  counterValue -= 1;
  console.log(counterValue);
  text.textContent = counterValue;
});
