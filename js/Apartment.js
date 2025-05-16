import Human from "./Human.js";

class Apartment {
    residents = [];


    setResident(person) {
        if(person instanceof Human) {
            this.residents.push(person);
        } else {
            console.log('You can only add an instance of a class Human')
        }
    }

}


export default Apartment;