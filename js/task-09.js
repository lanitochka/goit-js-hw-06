function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

// Напиши скрипт, который изменяет цвета фона элемента <body> через инлайн стиль при клике на button.change-color 
// и выводит значение цвета в span.color.
// Для генерации случайного цвета используй функцию getRandomHexColor.



const changeColorBtn = document.querySelector('.change-color');
const color = document.querySelector('.color');


changeColorBtn.addEventListener('click', changeColor);


function changeColor() {

  document.body.style.backgroundColor = getRandomHexColor();
  color.textContent = getRandomHexColor();

}
