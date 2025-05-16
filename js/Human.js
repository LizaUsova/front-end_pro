class Human {
    #name = null;
    #gender = null;

    constructor(name, gender) {
        this.name = name;
        this.gender = gender;
    }

    get name() {
        return this.#name;
    }
    set name(str) {
        if(str.trim().length < 2) throw new Error(`Cannot set ${str} as student name`);
        return this.#name = str;
    }

    get gender() {
        return this.#gender;
    }
    set gender(str) {
        if(str.trim() !== 'male' && str.trim() !== 'female') throw new Error(`Cannot set ${str} as gender`);
        return this.#gender = str;
    }
}



export default Human