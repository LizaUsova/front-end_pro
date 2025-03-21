'use strict';

const userInputOperator = prompt('Enter mathematical operator');
const firstUserNumber = +prompt('Enter first number');
const secondUserNumber = +prompt('Enter second number');


if (isNaN(firstUserNumber) || isNaN(secondUserNumber)) {
    alert('Please enter valid numbers!');
} else {
    let resultAdd = null;
    let resultSub = null;
    let resultMult = null;
    let resultDiv = null;

    if (userInputOperator === '+') {
        resultAdd = firstUserNumber + secondUserNumber;
        console.log(`${firstUserNumber} + ${secondUserNumber} = ${resultAdd}`);
    }

    if (userInputOperator === '-') {
        resultSub = firstUserNumber - secondUserNumber;
        console.log(`${firstUserNumber} - ${secondUserNumber} = ${resultSub}`);
    }

    if (userInputOperator === '*') {
        resultMult = firstUserNumber * secondUserNumber;
        console.log(`${firstUserNumber} * ${secondUserNumber} = ${resultMult}`);
    }

    if (userInputOperator === '/') {
        resultDiv = firstUserNumber / secondUserNumber;
        console.log(`${firstUserNumber} / ${secondUserNumber} = ${resultDiv}`);
    }
}