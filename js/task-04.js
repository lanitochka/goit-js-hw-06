// Создай переменную counterValue в которой будет храниться текущее значение счетчика 
// и инициализируй её значением 0.
// Добавь слушатели кликов на кнопки, внутри которых увеличивай или уменьшай значение счтетчика.
// Обновляй интерфейс новым значением переменной counterValue.


const buttonDecrement = document.querySelector('button[data-action="decrement"]');
const buttonIncrement = document.querySelector('button[data-action="increment"]');
const counterEl = document.querySelector('#value');


let counterValue = 0;

buttonDecrement.addEventListener('click', onClickBtnDecrement);
buttonIncrement.addEventListener('click', onClickBtnIncrement);

function onClickBtnDecrement() {
    counterValue -= 1;
    counterEl.textContent = counterValue;    
};

function onClickBtnIncrement() {
    counterValue += 1;
    counterEl.textContent = counterValue;
};