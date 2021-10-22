// Напиши скрипт, который при потере фокуса на инпуте (событие blur), 
// проверяет его содержимое на правильное количество введённых символов.

// Сколько символов должно быть в инпуте, указывается в его атрибуте data-length.
// Если введено подходящее количество символов, то border инпута становится зелёным, если неправильное - красным.
// Для добавления стилей, используй CSS-классы valid и invalid, которые мы уже добавили в исходные файлы задания.


const inputSymbols = document.querySelector('#validation-input');


inputSymbols.addEventListener('blur', onBlur);

function onBlur() {

    // console.log(inputSymbols.value);
    // console.log(inputSymbols.value.length);
    // console.log(inputSymbols.dataset.length);

    if (inputSymbols.value.length === +inputSymbols.dataset.length) {
        
        inputSymbols.classList.remove('invalid');
        inputSymbols.classList.add('valid');



    } else {
        inputSymbols.classList.remove('valid');
        inputSymbols.classList.add('invalid');
    }    
}
