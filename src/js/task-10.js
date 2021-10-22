function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}


// Напиши скрипт создания и очистки коллекции элементов. Пользователь вводит количество элементов в input 
// и нажимает кнопку Создать, после чего рендерится коллекция.При нажатии на кнопку Очистить, коллекция элементов очищается.

// Создай функцию createBoxes(amount), которая принимает один параметр - число. Функция создает столько <div>, 
// сколько указано в amount и добавляет их в div#boxes.

// Размеры самого первого <div> - 30px на 30px.
// Каждый элемент после первого, должен быть шире и выше предыдущего на 10px.
// Все элементы должены иметь случайный цвет фона в формате HEX. Используй готовую функцию getRandomHexColor для получения цвета.

// Создай функцию destroyBoxes(), которая очищает содержимое div#boxes, тем самым удаляя все созданные элементы.




const inputControls = document.querySelector('#controls input');

const createEl = document.querySelector('button[data-create]');
const destroyEl = document.querySelector('button[data-destroy]');
const boxesEl = document.querySelector('#boxes');


createEl.addEventListener('click', createBoxes.bind(null, inputControls));
destroyEl.addEventListener('click', destroyBoxes);


function createBoxes(amount) {

  let size = 30;  

  for (let i = 0; i < amount.value; i++) {
    const createDiv = document.createElement('div');
    createDiv.style.width = `${size}px`;
    createDiv.style.height = `${size}px`;
    createDiv.style.backgroundColor = getRandomHexColor();

    boxesEl.appendChild(createDiv);
    size += 10;
  }

  // return boxesEl;

}


function destroyBoxes() {
  boxesEl.innerHTML = '';
}

// 2 способ --------------------------------------------------


// function createBoxes(amount) {

//   let size = 30;

//   for (let i = 0; i < amount.value; i++) {
//     boxesEl.innerHTML += `<div style="width:${size}px;height:${size}px;background:${getRandomHexColor()}"></div>`;
//     size += 10;
//   }
  
// }
