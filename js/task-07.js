// Напиши скрипт, который реагирует на изменение значения input#font-size-control (событие input) 
// и изменяет инлайн - стиль span#text обновляя свойство font - size.
// В результате при перетаскивании ползунка будет меняться размер текста.




const inputFontSize = document.querySelector('#font-size-control');
const textSize = document.querySelector('#text');

inputFontSize.addEventListener('input', onInputFontSize);


function onInputFontSize() {
    // console.log(inputFontSize.value);
    textSize.style.fontSize = inputFontSize.value + 'px';    

}
