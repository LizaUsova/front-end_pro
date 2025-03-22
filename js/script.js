'use strict';

const userYearOfBirth = +prompt('Enter your year of birth');
const userCity = prompt('Enter your name of city').toLowerCase();
// const userFavoriteSport = prompt('Enter your favorite sport').toLowerCase();

const today = new Date();
const yearToday = today.getFullYear();

if(userYearOfBirth === null || userYearOfBirth === 0 || isNaN(userYearOfBirth)) {
    alert('Enter valid value please')
} else {
    const userAge = today - yearToday;

    if (userCity === null || userCity ==='') {
        alert('Enter valid value please')
    } else {
        if (userCity === 'Київ') {
            alert(`Твій вік ${userAge}; Ти живеш у столиці України`)
        } else if(userCity === 'Вашингтон') {
            alert(`Твій вік ${userAge}; Ти живеш у столиці США`);
        } else if(userCity === 'Лондон') {
            alert(`Твій вік ${userAge}; Ти живеш у столиці Великобританії`);
        } else {
            alert(`Your age is: ${userAge} та ти живеш у місті ${userCity}`);
        }
    }
}

