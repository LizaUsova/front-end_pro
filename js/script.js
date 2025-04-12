'use strict';

(function () {
    const form = document.querySelector('[data-form]')

    const handlerForm = (event) => {
        event.stopPropagation();
        event.preventDefault();

        const dataForm = {
            email: null,
            firstName: null,
            lastName: null,
            nickname: null,
            password: null,
            option: null,
            message: null
        }

        const inputs = event.target.querySelectorAll('input, textarea, select');

        for (const input of inputs) {
            dataForm[input.name] = input.value
        }

        localStorage.setItem('data', JSON.stringify(dataForm))
    }

    form.addEventListener('submit', handlerForm);

})()