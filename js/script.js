'use strict';
//1
let x = 10;
let y = 7;

const compare = x > y ? 'x більше за y' : 'x не більше, ніж y';


//2

let userInput = prompt('Enter integer number');

if(isNaN(userInput) || userInput.trim() === '') {
    alert('Please enter a valid integer number');
} else {
    userInput = Number(userInput);
    let userInputAbs = Math.abs(userInput);
    let userInputLength = userInputAbs.toString().length;

    if (userInput > 0) {
        alert(`Число ${userInput} позитивне та має ${userInputLength} знаків`);
    } else if (userInput < 0) {
        alert(`Число ${userInput} негативне та має ${userInputLength} знаків`);
    } else {
        alert('Ви ввели 0, яке є нейтральним числом');
    }
}

//3


