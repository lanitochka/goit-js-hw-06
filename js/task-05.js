// Напиши скрипт который, при наборе текста в инпуте input#name-input (событие input), 
// подставляет его текущее значение в span#name - output.
// Если инпут пустой, в спане должна отображаться строка "Anonymous".



const enteredName = document.querySelector('#name-input');
const outputName = document.querySelector('#name-output');


enteredName.addEventListener('input', onInputText);


function onInputText(e) {

    if (e.currentTarget.value === '') {
        outputName.textContent = 'Anonymous';

    } else {
        outputName.textContent = e.currentTarget.value;
    }
}