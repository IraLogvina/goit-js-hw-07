// Напиши скрипт, который бы при потере фокуса на инпуте, проверял его содержимое на правильное количество символов.
// Сколько символов должно быть в инпуте, указывается в его атрибуте data-length.
// Если введено подходящее количество, то border инпута становится зеленым, если неправильное - красным.
// Для добавления стилей, используй CSS-классы valid и invalid.


const inputRef = document.querySelector('input#validation-input');

const inputLength = Number(inputRef.getAttribute('data-length'));

const onInputBlur = function (event) {

if  (event.currentTarget.value.length === inputLength) {
    this.classList.add('valid');
    this.classList.remove('invalid');
} else {
    this.classList.add('invalid');
    this.classList.remove('valid');
    } 
};

inputRef.addEventListener('blur', onInputBlur)