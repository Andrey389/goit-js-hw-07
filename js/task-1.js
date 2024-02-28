const numberСategories = document.querySelectorAll('ul#categories > li.item');

console.log(`Number of categories: ${numberСategories.length}`);

numberСategories.forEach(category => {
  const categoryTitle = category.querySelector('h2').textContent;
  const categoryItem = category.querySelectorAll('ul li').length;
  console.log(`Category: ${categoryTitle}`);
  console.log(`Elements: ${categoryItem}`);
});
