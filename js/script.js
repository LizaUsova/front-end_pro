'use strict';

const padString = function (str, number = 1, symbol ='*', add = true) {

    if(typeof str !== 'string' || str.length === 0) return  'помилка, не введено рядок';
    if(typeof number !== 'number' || isNaN(number)) return  'помилка, не введено число';

    if(number <= str.length) return str.substring(0, number);

    if(typeof symbol !== 'string' || symbol.length !== 1) return  'помилка, не введено символ';
    if(typeof add !== 'boolean') return  'помилка, не введено додавати символи зліва чи справа';

    let padding = symbol.repeat(number - str.length);
    return add ? str + padding : padding + str;
}

console.log(padString('hello', 8));
console.log(padString('hello', 6, '*', false));
console.log(padString('hello', 2));


