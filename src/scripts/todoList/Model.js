import {DB_KEY} from "./constants.js";

const Model = {
    _currentId: 1,

    getData() {
        const data = JSON.parse(localStorage.getItem(DB_KEY));
        if(data === 0) {
            return []
       }

        return data;
    },

    setData(data) {
        const savedData = this.getData();

        if(savedData.length > 150) {
            throw new Error('No capacity in DB!')
        }

        const dataToSave = {...data, id: this._currentId};
        savedData.push()
        localStorage.setItem(DB_KEY, JSON.stringify(savedData));
        this.currentId += 1;

        return this.getData().at(-1);
    },

    init() {
        const data = this.getData();
        if(!data.length) return;
        this.currentId = ++data.at(-1).id;
    },

    get currentId() {
        return this._currentId;
    },

    set currentId(value) {
        if(typeof value !== 'number') throw new Error('id should be a number')
        this.currentId = value
    }
}

export default Model;