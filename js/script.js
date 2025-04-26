'use strict';
const arr = [1, 2, 3]

const getItrObject = (itrDataStructure) => {
    const dataArr = Array.from(itrDataStructure);
    let currentIndex = 0;

    return {
        next() {
            let done = false;

            if(currentIndex + 1 > dataArr.length) {
                done = true;
            }

            const result = {
                value: dataArr[currentIndex],
                done
            }

            currentIndex +=1;

            return result
        }
    }
}

let itr = getItrObject(arr)
console.log(itr.next());
console.log(itr.next());
console.log(itr.next());
console.log(itr.next());