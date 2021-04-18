const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];

let liArry = [];

ingredients.forEach((ingredient) => {
    const liRef = document.createElement('li');
    liRef.textContent = ingredient;
    liArry.push(liRef);
});
const liEl = document.querySelector('#ingredients');
liEl.append(...liArry);


