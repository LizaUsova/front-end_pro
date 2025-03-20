'use strict';

const firstUserInput = prompt('Enter first string');
const secondUserInput = prompt('Enter second string');
const thirdUserInput = prompt('Enter third string');

console.log(firstUserInput + secondUserInput + thirdUserInput);


const userNumberInput = prompt('Enter a five-digit number');

const userNumberInputToArray = userNumberInput.split('');
console.log(userNumberInputToArray.sort())

