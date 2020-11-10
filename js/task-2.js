const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];

const createIngredientsListItem = item => {
  const listItemRef = document.createElement('li');

  listItemRef.textContent = item;

  return listItemRef;
};

const listItemsArr = ingredients.map(ingredient =>
  createIngredientsListItem(ingredient),
);

const listRef = document.querySelector('#ingredients');

listRef.append(...listItemsArr);

console.log('Динамически созданный список ингредиентов: ', listRef);
