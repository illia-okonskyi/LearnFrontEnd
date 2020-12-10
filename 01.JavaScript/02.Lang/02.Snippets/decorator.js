"use strict"

const decorator = function(original) {
    // NOTE: "this" is forwared and calling code must be like:
    //   obj.f = decorator(obj.f);
    //   obj.f(args);
    return function(...args) {
        document.writeln(`Called with args: ${args}<br />`)
        return original.apply(this, args);
    };
};


function snippetDecorator() {
    const f = function(x, y) { return x + y };

    const decoratedF = decorator(f);
    decoratedF(1, 2);
    decoratedF(3, 4);
}