'use strict';

//1
const a = [3, 5, 8, 4, 10, 2, 5, 3];
const b = ['hi', 'hello'];

const indexOf = function (arr, item) {
    let res = -1;
    for(let i  = 0; i < arr.length; i++) {
        if(arr[i] === item) {
            return i;
        }
    }

    return res;
}

const myA = indexOf(a, 8);
const myB = indexOf(b, 'hi');
console.log(myA);
console.log(myB);

//2
const lastIndexOf = function (arr, item) {
    let res = -1;
    for(let i = arr.length - 1; i >= 0; i--) {
        if(arr[i] === item) {
            return i;
        }
    }

    return res;
}

const myALast = lastIndexOf(a, 3);
const myBLast = lastIndexOf(b, 'hi');
console.log(myALast);
console.log(myBLast);

//3
const find = function (arr, elem) {
    let res = undefined;
    for(let i = 0; i < arr.length; i++) {
        if(arr[i] === elem) {
            return arr[i]
        }
    }

    return res
}

const myAFind = find(a, 10);
const myBFind = find(b, 'hello');

console.log(myAFind);
console.log(myBFind);