'use strict';

const userInput = prompt('Enter value and C or F');

const userNumber = parseInt(userInput);
const letterMatch = userInput.match(/[a-zA-Z]/);
const userLetter = letterMatch ? letterMatch[0].toLowerCase() : null;

if (userLetter === 'c') {
    alert(`From C to F: ${(userNumber * 9/5) + 32}`);
} else if (userLetter === 'f') {
    alert(`From C to F: ${(userNumber - 32) * 5 / 9}`);
} else {
    alert('Enter correct information please')
};