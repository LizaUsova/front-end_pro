'use strict';

const a = 0;
const b = 20;
const num = 3;

switch (true) {
    case a === 0:
        console.log('Вірно');
        break;
    case a > 0:
        console.log('Вірно');
        break;
    case a < 0:
        console.log('Вірно');
        break;
    case a >= 0:
        console.log('Вірно');
        break;
    case a <= 0:
        console.log('Вірно');
        break;
    case a !== 0:
        console.log('Вірно');
        break;
    case a === 'test':
        console.log('Вірно');
        break;
    case a === 1:
        console.log('Вірно');
        break;
    case a > 0 && a < 5:
        console.log('Вірно');
        break;
    default:
        console.log('Невірно');
}

if (a === 0 || a === 2) {
    const add = a + 7;
    console.log(add);
} else {
    const div = a / 10;
    console.log(div);
}

if( a <= 1 && b >= 3) {
    console.log(a + b);
} else {
    console.log(a - b);
}

if (a > 2 && a < 11 || b >= 6 && b < 14) {
    console.log('Вірно');
} else {
    console.log('Невірно');
}

let result = null;

switch (num) {
    case 1:
        result = 'зима';
        break;
    case 2:
        result = 'весна';
        break;
    case 3:
        result = 'Літо';
        break;
    default:
        result = 'осінь';
}

console.log(result);