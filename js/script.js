'use strict';

const firstUserInput = +prompt('Enter first value');
const secondUserInput = +prompt('Enter second value');

if(isNaN(firstUserInput) || isNaN(secondUserInput)) {
    alert('Enter valid values please')
} else {
    alert(`Користувач ввів ${firstUserInput} і ${secondUserInput}: \n
    ${firstUserInput} + ${secondUserInput} = ${firstUserInput+secondUserInput} \n
    ${firstUserInput} - ${secondUserInput} = ${firstUserInput-secondUserInput} \n
    ${firstUserInput} * ${secondUserInput} = ${firstUserInput*secondUserInput} \n
    ${firstUserInput} / ${secondUserInput} = ${firstUserInput/secondUserInput}`)
}