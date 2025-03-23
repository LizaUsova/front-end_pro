'use strict';

//1
let arr = [];

for(let i = 10; i <= 20; i++) {
    arr.push(i);
}

console.log(arr.toString());

//2
let arr1 = [];

for(let i = 10; i <= 20; i++) {
    arr1.push(i * i);
}

console.log(arr1.toString());

//3
let arr3 = [];

for(let i = 1; i <= 10; i++) {
    arr3.push(i * 7);
}

console.log(arr3.toString());

//4
let sum = 0;

for(let i = 1; i <= 15; i++) {
    sum += i;
}
console.log(sum)

//5
let mult = 1n;

for(let i = 15n; i <= 35n; i++) {
    mult *= i;
}
console.log(mult)

//6
let sum1  = 0;
let max = 500;

for(let i = 1; i <= max; i++) {
    sum1  += i;
}

let average = sum1 / max;
console.log(average)

//7
let sum2 = 0;

for(let i = 30; i <= 80; i++) {
    if(i % 2 === 0) {
        sum2 += i;
    }
}

console.log(sum2)

//8
let arr2 = [];

for(let i = 100; i <= 200; i++) {
    if(i % 3 === 0) {
        arr2.push(i);
    }
}

console.log(arr2.toString())

//9, 10, 11
const number = 36;
const divisors = [];
let sumOfEvenDivisors = 0;

for (let i = 1; i <= number; i++) {
    if (number % i === 0) {
        divisors.push(i);
        if (i % 2 === 0) {
            sumOfEvenDivisors += i;
        }
    }
}

console.log('всі дільники числа ' + number + ': ' + divisors.join(', '));
console.log('кількість дільників: ' + divisors.length);
console.log('Сума парних дільників: ' + sumOfEvenDivisors);

//10
for (let i = 1; i <= 10; i++) {
    let row = '';
    for (let y = 1; y <= 10; y++) {
        row = row + (i * y) + '\t';
    }
    console.log(row);
}

console.log('Повна таблиця множення від 1 до 10:');