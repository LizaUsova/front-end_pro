'use strict';
//1
const arr =  [1, 2, 3];
const arr1 = [4, 5, 6];

const arraysJoin = arr.concat(arr1)
// console.log(arraysJoin);

//2
const arr2 = [1, 2, 3];
const arrReverse = arr2.reverse();
// console.log(arrReverse);

//3
const arr3 = [1, 2, 3];
arr3.push(4, 5, 6);
// console.log(arr3);

//4
const arr4 = [1, 2, 3];
arr4.unshift(4, 5, 6);
// console.log(arr4);

//5
const arr5 = ['js', 'css', 'jq'];
// console.log(arr5[0]);

//6
const arr6 = ['js', 'css', 'jq'];
// console.log(arr5[arr5.length - 1]);

//7
const arr7 = [1, 2, 3, 4, 5];
const arr7New = arr7.slice(0, 3);

// console.log(arr7);
// console.log(arr7New);

//8
const arr8 = [1, 2, 3, 4, 5];
const arr8New = arr7.slice(- 2);

// console.log(arr8);
// console.log(arr8New);