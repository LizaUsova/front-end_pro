import Model from "./Model.js";
import View from "./View.js";
import Controller from "./Controller.js";


const selectors = {
    form: '#todoForm',
    todosContainer: '#todoItems'
}

Controller.init(selectors)
Model.init()
View.init(selectors)
