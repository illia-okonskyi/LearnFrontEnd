"use strict"

class CustomError extends Error {
    constructor(message) {
        super(message);
        this.name = this.constructor.name;
    }
}

class CustomError1 extends CustomError {
    constructor(prop) {
        super("Custom message 1");
        this.prop = prop;
    }
}

class CustomError2 extends CustomError {}

function snippetCustomError() {
    try {
        throw new CustomError1(15);
    } catch (err) {
        if (err instanceof CustomError1) {
            document.writeln(`Caught CustomError1: ${err}; prop = ${err.prop} <br />`);
        } else if (err instanceof CustomError) {
            document.writeln(`Caught CustomError: ${err} <br />`);
        } else {
            throw err;
        }
    }
}