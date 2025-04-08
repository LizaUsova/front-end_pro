'use strict';

const user = {
    name: 'Vova',
    lastName: 'Doe',
    age: 27
}

const call = function (func, ctx, arg) {
    const innerCtx = structuredClone(ctx);
    innerCtx.cM = func
    innerCtx.cM(arg)
}

const display = function () {
    console.log(this.name)
}

const bind = function (bindFunc, bindCtx, bindArg) {
    return function () {
        return call(bindFunc, bindCtx, bindArg)
    }
}

const b = bind(display, user)
console.log(b);
b();