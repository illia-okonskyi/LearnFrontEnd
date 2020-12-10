"use strict"

class BaseClass {
    constructor({ prop = "prop" } = {}) {
        this.prop = prop;
    }

    // NOTE: Future standard: props and static props
    // prop3 = "prop3";
    // static prop4 = "prop4";

    get prop() {
        return this._prop;
    }
    set prop(value) {
        this._prop = value;
    }

    method() {
        document.writeln(`BaseClass::method; prop = ${this.prop}<br />`);
    }

    ["method2"]() {
        this.method();
        document.writeln(`BaseClass::method2; prop = ${this.prop}<br />`);
    }

    static staticMethod() {
        document.writeln(`BaseClass::staticMethod <br />`);
    }

    static makeBaseClass(prop) {
        return new this({ prop });
    }
}

class DerivedClass extends BaseClass {
    constructor({ prop = "derivedProp", prop2 = "prop2" } = {}) {
        super({ prop });
        this.prop2 = prop2;
    }

    method() {
        super.method();
        document.writeln(`DerivedClass::method prop2 = ${this.prop2}<br />`);
    }
}

function snippetOop() {
    const derived = new DerivedClass({ prop: "p1", prop2: "p2" });
    derived.prop = "p1-1";
    derived.prop2 = "p2-2";

    derived.method();

    // NOTE: interesting effect because of `this` is `derived`:
    // the derived.method() is called inside base.method2();
    derived.method2();

    const base = BaseClass.makeBaseClass("p1");
    base.method();

    BaseClass.staticMethod();
}