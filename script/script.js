const number01 = document.getElementById('inp01');
const number02 = document.getElementById('inp02');
const number03 = document.getElementById('inp03');
const number04 = document.getElementById('inp04');
const direct = document.getElementById('direct');
const inverse = document.getElementById('inverse');

const elements = [number01, number02, number03, direct, inverse];
for(let i of elements) {i.addEventListener('input', calculator);}

function calculator () {
    let result;
    if (number01.value !== '' && number02.value !== '' && number03.value !== '') {
        if (direct.checked) {
            result = Number(number02.value) * Number(number03.value) / Number(number01.value);
        } else if (inverse.checked) {
            result = Number(number01.value) * Number(number02.value) / Number(number03.value);
        }
    }   
    number04.value = parseInt(result);
}