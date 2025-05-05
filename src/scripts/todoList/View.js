const View = {
    _formSelector: null,
    _todosContainerSelector: null,
    _formElement: null,
    _todosContainerElement: null,

    renderItem(data) {
        const layout = this.createTemplate(data);
        this.todosContainerElement.prepend(layout);
    },

    resetForm(){
        this.formElement.reset()
    },


     createTemplate({title, description}) {
         const wrap = document.createElement('div');
        wrap.classList.add('col-4');
        wrap.setAttribute('data-id', id)
         wrap.innerHTML = `
                             <div class="col-4">
                        <div class="taskWrapper">
                            <div class="taskHeading">${title}</div>
                            <div class="taskDescription">${description}</div>
                        </div>
                    </div>`

         return wrap;
     },


    init({form, todosContainer}) {
             this.formSelector = form;
             this.todosContainerSelector = todosContainer;
     },

    validateSelector(selector) {
        if (typeof selector !== 'string') throw new Error('selector should be a string');
        if(selector.trim() === '') throw new Error('selector should not be empty');

        const element = document.querySelector(selector);

        if(element === null) throw new Error('selector not found in DOM')
    },

    set formSelector(selector) {
        this.validateSelector(selector);
        this._formSelector = selector;
        this._formElement = document.querySelector(selector)
    },
    set todosContainerSelector(selector) {
        this.validateSelector(selector);
        this._todosContainerSelector = selector;
        this._todosContainerSelector = document.querySelector(selector)
    },

    get formSelector() {
        return this._formSelector
    },
    get todosContainerSelector() {
        return this._todosContainerSelector
    },
    get formElement() {
        return this._formElement
    },
    get todosContainerElement() {
        return this._todosContainerElement
    }
}

export default View;