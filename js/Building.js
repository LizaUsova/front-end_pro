import Apartment from "./Apartment.js";

class Building {
    #apartments = [];
    maxCount = 0;

    constructor(maxCount) {
        this.maxCount = maxCount;
    }

    addApartment(apart) {
        if(apart instanceof Apartment) {
            if(this.maxCount > this.#apartments.length) {
                this.#apartments.push(apart);
            } else {
                console.log('you have reached the maximum number of apartments')
            }
        }
    }
}

export default Building