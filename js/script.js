'use strict';

const userInputNumber = +prompt('Enter some number');
const userInputPower = +prompt('Enter power of number');

const exponentiation = function (number, power = 1) {
    if (isNaN(number) || isNaN(power)) {
        return 'Arguments are not numbers';
    } else {
        return number ** power;
    }
}

const result = alert(exponentiation(userInputNumber, userInputPower));
