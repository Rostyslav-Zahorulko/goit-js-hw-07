const getCategoriesInfo = () => {
  const categoriesListItemsRef = document.querySelectorAll('.item');

  console.log(`В списке ${categoriesListItemsRef.length} категории`);

  categoriesListItemsRef.forEach(category => {
    const categoryTitleRef = category.querySelector('h2');
    const categoryElementsRef = category.querySelectorAll('li');

    console.log(`Категория: ${categoryTitleRef.textContent}`);
    console.log(`Количество элементов: ${categoryElementsRef.length}`);
  });
};

getCategoriesInfo();
