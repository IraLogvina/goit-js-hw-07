// Напиши скрипт который, при наборе текста в инпуте input#name-input (событие input), 
// подставляет его текущее значение в span#name-output. 
// Если инпут пустой, в спане должна отображаться строка 'незнакомец'.

const inputRef = document.querySelector('#name-input');
const outputRef = document.querySelector('#name-output');

function onInputChange (event) {

    if (event.currentTarget.value === '') {
        outputRef.textContent = 'незнакомец'
    }
    (outputRef.textContent = event.currentTarget.value);

}

inputRef.addEventListener('input', onInputChange);