const categoriesQuantity = document.querySelectorAll('.item');
console.log('Количество категорий:', categoriesQuantity.length);

const categories = document.querySelectorAll('.item h2');
categories.forEach(item =>
    console.log(
        'Категория:', item.textContent,
        'Количество элементов:', item.nextElementSibling.children.length)
);

