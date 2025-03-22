'use strict';
//1
let x = 10;
let y = 7;

const compare = x > y ? 'x більше за y' : 'x не більше, ніж y';


//2

// let userInput = prompt('Enter integer number');
//
// if(isNaN(userInput) || userInput.trim() === '') {
//     alert('Please enter a valid integer number');
// } else {
//     userInput = Number(userInput);
//     let userInputAbs = Math.abs(userInput);
//     let userInputLength = userInputAbs.toString().length;
//
//     if (userInput > 0) {
//         alert(`Число ${userInput} позитивне та має ${userInputLength} знаків`);
//     } else if (userInput < 0) {
//         alert(`Число ${userInput} негативне та має ${userInputLength} знаків`);
//     } else {
//         alert('Ви ввели 0, яке є нейтральним числом');
//     }
// }

//3

let firstUserInput = prompt('Enter first number');
let secondUserInput = prompt('Enter second number');
let thirdUserInput = prompt('Enter third number');

let firstNumber = Number(firstUserInput);
let secondNumber = Number(secondUserInput);
let thirdNumber = Number(thirdUserInput);

if(isNaN(firstNumber) || isNaN(secondNumber) || isNaN(thirdNumber)) {
    alert('Please enter a valid number')
} else if (firstNumber > secondNumber && firstNumber > thirdNumber) {
    alert('Найбільше число: ' + firstNumber);
} else if (secondNumber > firstNumber && secondNumber > thirdNumber) {
    alert('Найбільше число: ' + secondNumber);
} else if (thirdNumber > firstNumber && thirdNumber > secondNumber) {
    alert('Найбільше число: ' + thirdNumber);
} else {
    alert('Декілька чисел рівні між собою');
}
