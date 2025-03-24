'use strict';

for (let i = 20; i <= 30; i+= 0.5) {
    console.log(i)
}


let dollar = 27;
for (let i = 10; i <= 100; i += 10) {
    console.log(i * dollar)
}


let n = 50;
for (let i = 1; i <= 100; i ++) {
   if(i * i <= n) {
       console.log(i)
   }
}


const integer = 3;
let isPrime = integer > 1;

for (let i = 2; i <= Math.sqrt(integer); i++) {
    if(integer % i === 0) {
        isPrime = false;
        break;
    }
}

if (isPrime) {
    console.log(`Число ${integer} є простим`);
} else {
    console.log(`Число ${integer} не є простим`);
}


const number = 81;

for (let i = 1; i < number; i++) {
    const calculatedNumber = 3 ** i;

    if (calculatedNumber > number) {
        console.log('число не знайдене');
        break;
    }

    if (calculatedNumber !== number) continue
    console.log(calculatedNumber);
    break;
}
