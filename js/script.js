'use strict';

const age = +prompt('How old are you?');
const plusAge = 10;

if (isNaN(age)) {
    alert('Is not age');
} else {
    const futureAge = age + plusAge;
    alert(`in ${plusAge} years you will be ${futureAge} years old`);
};

