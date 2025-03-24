'use strict';

const arr = [1, 2, 3, 4, 5];
let add = 0;

for (let i = 0; i < arr.length; i++) {
    add += arr[i];
}

console.log(add)

let sum = 0;
const degree = 2;

for (let i = 0; i < arr.length; i++) {
    sum += arr[i] ** degree;
}

console.log(sum);