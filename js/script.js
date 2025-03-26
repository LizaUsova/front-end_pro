'use strict';
//1
const arr =  [1, 2, 3];
const arr1 = [4, 5, 6];
const arraysJoin = arr.concat(arr1)
console.log(arraysJoin);

//2
const arr2 = [1, 2, 3];
const arrReverse = arr2.reverse();
console.log(arrReverse);

//3
const arr3 = [1, 2, 3];
arr3.push(4, 5, 6);
console.log(arr3);

//4
const arr4 = [1, 2, 3];
arr4.unshift(4, 5, 6);
console.log(arr4);

//5
const arr5 = ['js', 'css', 'jq'];
console.log(arr5[0]);

//6
const arr6 = ['js', 'css', 'jq'];
console.log(arr5[arr5.length - 1]);

//7
const arr7 = [1, 2, 3, 4, 5];
const arr7New = arr7.slice(0, 3);
console.log(arr7);
console.log(arr7New);

//8
const arr8 = [1, 2, 3, 4, 5];
const arr8New = arr7.slice(- 2);
console.log(arr8);
console.log(arr8New);

//9
const arr9 = [1, 2, 3, 4, 5];
arr9.splice(1, 2);
console.log(arr9);

//10
const arr10 = [1, 2, 3, 4, 5];
const arr10New = arr10.splice(1, 3);
console.log(arr10New);

//11
const arr11 = [1, 2, 3, 4, 5];
arr11.splice(3,0, 'a', 'b', 'c');
console.log(arr11);

//12
const arr12 = [1, 2, 3, 4, 5];
//[1, 'a', 'b', 2, 3, 4, 'c', 5, 'e']
arr12.splice(1, 0, 'a', 'b');
arr12.splice(6, 0, 'c');
arr12.push('e');
console.log(arr12);

//13
const arr13 = [3, 4, 1, 2, 7];
arr13.sort();
console.log(arr13);

//14
const arr14 = [5, 6, 7, 8, 9];
let sum= 0;
arr14.forEach(item => sum += item)
console.log(sum);

//15
const arr15 = [5, 6, 7, 8, 9];
const arr15square = [];
arr15.forEach(item => arr15square.push(item ** 2))
console.log(arr15square);

//16
const arr16 = [1,-3, 5, 6,-7, 8, 9,-11];
const arr16New = arr16.filter(item => item < 0);
console.log(arr16New);

//17
const arr17 = [1,-3, 5, 6,-7, 8, 9,-11];
const evenNumbers = arr17.filter(item => item % 2 === 0);
console.log(evenNumbers);

//18
const arr18 = ['aaa', 'aaaqqq', 'zzzqq', 'zz', 'qsaa', 'q', 'az'];
const length5 = arr18.filter(item => item.length >= 5);
console.log(length5);

//19
const arr19 = [1, 2, [3, 4], 5, [6, 7]];
const subArr19 = arr19.filter(item => Array.isArray(item));
console.log(subArr19);

//20
const arr20 = [5,-3, 6,-5, 0,-7, 8, 9];
const arr20New = arr20.filter(item => item < 0);
console.log(arr20New.length);