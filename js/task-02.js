const ingredients = ['Картошка', 'Грибы', 'Чеснок', 'Помидоры', 'Зелень', 'Приправы'];

const list = document.querySelector('#ingredients');
let newList = [];

ingredients.forEach(ingredient => {
  const listItem = document.createElement('li');
  console.log(listItem);
  listItem.textContent = ingredient;
  newList.push(listItem);
});
console.log(newList);
list.append(...newList);
