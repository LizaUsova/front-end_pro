'use strict';

const arr = [1, 2, 3, -1, -2, -3];

const newArrFunc = function (arr) {
    const currentPositiveNumber = [];

    if(arr.length === 0) {
        return 'array is empty';
    }

    for(let i = 0; i < arr.length; i++) {
        if(arr[i] > 0) {
            currentPositiveNumber.push(arr[i]);
        }
    }

    return currentPositiveNumber.length ? currentPositiveNumber : null;
}

const result = newArrFunc(arr);
console.log(result);