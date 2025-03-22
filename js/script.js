'use strict';

let userInput = prompt('Enter your age');

if(isNaN(userInput) || userInput === null || userInput.trim() === '') {
    alert('Enter number please');
} else {
    userInput = Number(userInput);

    if(userInput === 0 || userInput >= 5) {
    alert(`Тобі ${userInput} років`);
    } else if(userInput === 1) {
        alert(`Тобі ${userInput} рік`);
    } else if(userInput >= 2 && userInput <= 4) {
        alert(`Тобі ${userInput} роки`);
    }
}

