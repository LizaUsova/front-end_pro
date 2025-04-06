'use strict';

//1
function factorial (n) {
    if(n === 1 || n === 0) {
        return 1
    }     else {
        return n * factorial(n - 1)
    }
}

console.log(factorial(4));

//2
function pow(num, degree) {
    if(degree === 0) {
        return 1
    } else if (degree > 0) {
        return num * pow(num, degree - 1);
    }
}

console.log(pow(2, 6));