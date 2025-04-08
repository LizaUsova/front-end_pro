'use strict';
const user = {
    name: 'Vova',
    lastName: 'Doe',
    age: 27
}

const apply = function (func, ctx, arg = []) {
    const innerCtx = structuredClone(ctx);
    innerCtx.cM = func
    return innerCtx.cM(...arg)
}

const display = function () {
    console.log(this.name)
}

const result = apply(display, user)