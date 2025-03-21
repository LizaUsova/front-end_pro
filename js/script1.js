'use strict';

const userInputOperator = prompt('Enter mathematical operator');
const firstUserNumber = +prompt('Enter first number');
const secondUserNumber = +prompt('Enter second number');

if (isNaN(firstUserNumber) || isNaN(secondUserNumber)) {
    alert('Please enter valid numbers!');
} else {
    switch (userInputOperator) {
        case '+':
            console.log(`${firstUserNumber} + ${secondUserNumber} = ${firstUserNumber + secondUserNumber}`);
            break;
        case '-':
            console.log(`${firstUserNumber} - ${secondUserNumber} = ${firstUserNumber - secondUserNumber}`);
            break;
        case '*':
            console.log(`${firstUserNumber} * ${secondUserNumber} = ${firstUserNumber * secondUserNumber}`);
            break;
        case '/':
            if (secondUserNumber === 0) {
                console.log('Error: division by zero is not allowed.');
            } else {
                console.log(`${firstUserNumber} / ${secondUserNumber} = ${firstUserNumber / secondUserNumber}`);
            }
            break;
        default:
            alert('Invalid operator! Please enter one of (+, -, *, /)');
    }
}