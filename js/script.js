'use strict';

//1
const arr1 = ['a', 'b', 'c', 'd'];

const startArr = arr1.slice(0,2).join('+');
const endArr = arr1.slice(2,4).join('+');
const newArr = startArr + ', ' + endArr;

console.log(newArr);

//2
const arr2 = [2, 5, 3, 9, 8, 2];

const multiply = function (arr) {
    let result = 0;

    for (let i = 0; i < arr.length; i += 2) {
        let multiply = arr[i] * arr[i + 1];
        result += multiply;
    }

    return result;
}

console.log(multiply(arr2))

//3
const  arr3 = [ [1, 2, 3], [4, 5, 6], [7,8,9] ];
const newArr3 = arr3.flat();

console.log(newArr3.find( elem => elem === 4))

//4
let obj = {js:['jQuery', 'Angular'],
                php: 'hello',
                css: 'world'};

const myResult = obj.js[0];
console.log(myResult);

//5
let arr5 = [];

const pushIter = function (arr, length, symbol) {
    for (let i = 0; i <= length; i++) {
        arr.push(symbol.repeat(i + 1))
    }

    return arr;
}

const newArr5 = pushIter(arr5, 5, 'x');
console.log(newArr5);

//6
let arr6 = [];
const pushIterNumbers = function (arr, length) {
    for (let i = 1; i <= length; i++) {
        arr.push(String(i).repeat(i))
    }

    return arr;
}

const newArr6 = pushIterNumbers(arr6, 5);
console.log(newArr6);

//7
const arrayFillCustom = function (symbol, length) {
    let arr = [];

    for(let i = 0; i < length; i++) {
        arr.push(symbol)
    }

    return arr;
}

const newArr7 = arrayFillCustom('x', 5);
console.log(newArr7);

//7.1
const arrayFill = (symbol, length) => Array(length).fill(symbol);
const newArr7_1 = arrayFill('x', 5);
console.log(newArr7_1);

//8
const arr8 = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const howManyElem = function (arr) {
    let sum = 0;
    let count = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
        count++;
        if (sum > 10) {
            break;
        }
    }
    return count;
}

const newArr8 = howManyElem(arr8);
console.log(newArr8);

//9
const arr9 = [1, 2, 3, 4, 5, 6];

const reverse = function (arr) {
    for(let i = 0; i < arr.length; i++) {
        const currentElem = arr[i];
        const lastElem = arr[arr.length - (1 + i)]

        arr[i] = lastElem;
        arr[arr.length - (1 + i)] = currentElem;

        if(1 + i === Math.floor(arr.length / 2)) break;
    }

    return arr
}

const newArr9 = reverse(arr9);
console.log(newArr9);

//10
const arr10 = [
    [1, 2, 3],
    [4, 5],
    [6]
];

const sum = function (arr) {
    const arrFlat = arr.flat();
    let sum = 0;

    for(let i = 0; i < arrFlat.length; i ++) {
        sum += arrFlat[i]
    }

    return sum;
}

const newArr10 = sum(arr10)
console.log(newArr10);

//11
const arr11 = [
    [
        [1, 2],
        [3, 4]],
    [
        [5, 6],
        [7, 8]
    ]
]

const sum11 = function (arr) {
    const arrFlat = arr.flat(2);
    let sum = 0;

    for (let i = 0; i < arrFlat.length; i++) {
        sum += arrFlat[i];
    }

    return sum;
}


const newArr11 = sum11(arr11)
console.log(newArr11);