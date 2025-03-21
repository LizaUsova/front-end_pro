'use strict';

const firstUserOperand = +prompt('Enter first operand');
const secondUserOperand = +prompt('Enter second operand');

if (firstUserOperand && secondUserOperand) {
    const add = firstUserOperand + secondUserOperand;
    const sub = firstUserOperand - secondUserOperand;
    const multiply = firstUserOperand * secondUserOperand;
    const divide =  firstUserOperand / secondUserOperand;

    console.log(`Addition: ${firstUserOperand} + ${secondUserOperand} = ${add} \n
                 Subtraction: ${firstUserOperand} - ${secondUserOperand} = ${sub} \n
                 Multiplication: ${firstUserOperand} * ${secondUserOperand} = ${multiply} \n
                 Division: ${firstUserOperand} / ${secondUserOperand} = ${divide}`);
} else {
    alert('is not a number, write correct please');
};

