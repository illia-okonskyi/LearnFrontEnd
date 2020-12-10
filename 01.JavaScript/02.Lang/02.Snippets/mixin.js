"use strict"

let eventMixin = {
    subscribe(eventName, handler) {
        if (!this._eventHandlers) this._eventHandlers = {};
        if (!this._eventHandlers[eventName]) {
            this._eventHandlers[eventName] = [];
        }
        this._eventHandlers[eventName].push(handler);
    },

    unsubscribe(eventName, handler) {
        let handlers = this._eventHandlers && this._eventHandlers[eventName];
        if (!handlers) return;
        for (let i = 0; i < handlers.length; i++) {
            if (handlers[i] === handler) {
                handlers.splice(i--, 1);
            }
        }
    },

    trigger(eventName, ...args) {
        if (!this._eventHandlers || !this._eventHandlers[eventName]) {
            return;
        }

        this._eventHandlers[eventName].forEach(handler => handler.apply(this, args));
    }
};

class Menu {
    choose(value) {
        this.trigger("select", value);
    }
}
Object.assign(Menu.prototype, eventMixin);


function snippetMixin() {
    let menu = new Menu();

    menu.subscribe("select", value => document.writeln(`Selected value: ${value} <br />`));
    menu.choose("Menu item 1");
}