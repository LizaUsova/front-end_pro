'use strict';

(function () {
    const sum = (param) => {
        let result = param;

        return (number) => {
            result += number;
            return result
        }
    }


    const example = sum(3);
    console.log(example(5));
    console.log(example(20));
})()