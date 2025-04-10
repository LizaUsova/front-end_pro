'use strict';
(function (){
    const arr = [1,2,3];
    const arr1 = [1, 2, 3, [1.1, 1.2, 1.3], 4];

    const generateList = (array) => {
        const  ul = document.createElement('ul');

         for(let i = 0; i < array.length; i++) {
             let li = document.createElement('li');

             if(Array.isArray(array[i])) {
                 li.appendChild(generateList(array[i]))
             } else {
                 li.innerHTML = array[i]
             }

             ul.appendChild(li)
         }

     return ul;
    }

    document.body.appendChild(generateList(arr));
    document.body.appendChild(generateList(arr1));

})()
