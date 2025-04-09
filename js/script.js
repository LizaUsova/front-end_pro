'use strict';
const listUl = document.getElementById("ulId");
const listElements = listUl.childNodes;

const listElementsArray = []

for (const elem of listElements) {
    if (elem instanceof HTMLElement) {
        listElementsArray.push(elem)
    }
}

console.log(listElementsArray);
console.log(listElementsArray.length);

const textElemArray = [];

for(const elem of listElementsArray) {
    textElemArray.push(elem.textContent)
}

console.log(textElemArray);