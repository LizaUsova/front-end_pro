'use strict';

const userYearOfBirth = +prompt('Enter your year of birth');
const userCity = prompt('Enter your name of city').toLowerCase();
const userFavoriteSport = prompt('Enter your favorite sport').toLowerCase();

const today = new Date();
const yearToday = today.getFullYear();

if(userYearOfBirth === null || userYearOfBirth === 0 || isNaN(userYearOfBirth)) {
    alert('Enter valid value please')
} else {
    const userAge = today - yearToday;

    if (userCity === null || userCity ==='') {
        alert('Enter valid value please')
    } else {
        let cityMessage;
        if (userCity === 'Київ') {
            cityMessage = 'столиці України';
        } else if (userCity === 'Вашингтон') {
            cityMessage = 'столиці Сполучених Штатів Америки';
        } else if (userCity === 'Лондон') {
            cityMessage = 'столиці Великої Британії';
        } else {
            cityMessage = userCity;
        }


        if (userFavoriteSport === null || userFavoriteSport === '') {
            alert('Шкода, що Ви не захотіли ввести свій улюблений спорт');
        } else {
            let sportMessage;
            if (userFavoriteSport === 'футбол') {
                sportMessage = 'Роналдо';
            } else if (userFavoriteSport === 'баскетбол') {
                sportMessage = 'Майл Джордан';
            } else if (userFavoriteSport === 'формула 1') {
                sportMessage = 'Михайло Шумахер';
            } else {
                sportMessage = 'професійний спортсмен';
            }

            alert('Ваш вік ' + userAge + '\n' +
                'Ви живете у ' + cityMessage + '\n' +
                'Ваш улюблений спорт - ' + userFavoriteSport + '. Хочеш стати як ' + sportMessage + '?');
        }
    }
}

