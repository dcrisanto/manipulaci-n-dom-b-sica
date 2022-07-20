const form = document.querySelector('#form');
let number1 = document.querySelector('#number1');
let number2 = document.querySelector('#number2');
let btnCalculate = document.querySelector('#btn-calculate');
const result = document.querySelector('#result');

const add = () => {
    //console.log(event);
    //console.log({event});
    //event.preventDefault(); // para que no se recargue la página
    n1 = parseInt(number1.value);
    n2 = parseInt(number2.value);
    const addition = n1 + n2;
    result.innerText = `El resultado es : ${addition}`;
}

btnCalculate.addEventListener('click', add);