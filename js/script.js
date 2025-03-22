'use strict';

const user = {};

user.name = 'John';
user.surname = 'Smith';
console.log(user.name);

user.name = 'Pete';
console.log(user.name);

delete user['name'];

console.log(user);

const salaries = {
    John: 100,
    Ann: 160,
    Pete: 130
}

const sum = salaries.Pete + salaries.Ann + salaries.Pete;
console.log(sum);
