import { MyNumber } from "./MyNumber.js"

export class MyNumberFunctions {
    static add(a, b) {
        if (!(a instanceof MyNumber && b instanceof MyNumber)) {
            throw new Error("MyNumber expected");
        }

        return a.value + b.value;
    }

    static substract(a, b) {
        if (!(a instanceof MyNumber && b instanceof MyNumber)) {
            throw new Error("MyNumber expected");
        }

        return a.value - b.value;
    }
}