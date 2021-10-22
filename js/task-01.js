const liCategories = document.querySelectorAll('.item');
// console.log(liCategories);
console.log(`Number of categories: ${liCategories.length}`);



const h2Title = document.querySelectorAll('.item h2');
// console.log(h2Title);
h2Title.forEach(element => {
  console.log(`Category: ${element.textContent}`);
});


const amountOfLiElements = document.querySelectorAll('.item ul');       
// console.log(amountOfLiElements);
amountOfLiElements.forEach(element => {
  console.log(`Elements: ${element.children.length}`);
});
