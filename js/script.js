'use strict';

const firstUserInput = +prompt('Enter first value');
const secondUserInput = +prompt('Enter second value');
const thirdUserInput = +prompt('Enter third value');

if (isNaN(firstUserInput) || isNaN(secondUserInput) || isNaN(thirdUserInput)) {
    alert('enter valid value')
} else {
    alert(`${(firstUserInput+secondUserInput+thirdUserInput)/3}`)
}