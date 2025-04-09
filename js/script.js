'use strict';
const listUl = document.getElementById("ulId");
const listElements = listUl.childNodes;

const listElementsArray = [];

for (const elem of listElements) {
    if (elem instanceof HTMLElement) {
        listElementsArray.push(elem);
    }
}

console.log(listElementsArray);

const ulAttr = listUl.attributes;
const ulAttrNames = [];

for (const elem of ulAttr) {
    ulAttrNames.push(elem.value)
}

console.log(ulAttrNames);

const lastTagOfUl = listUl.lastElementChild;
const firstTagOfUl = listUl.firstElementChild;

lastTagOfUl.innerHTML = 'Привет меня зовут Лиза';
console.log(lastTagOfUl);

firstTagOfUl.setAttribute('data-my-name', 'Liza');

listUl.removeAttribute('data-dog-tail');