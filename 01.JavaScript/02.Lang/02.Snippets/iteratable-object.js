"use strict"

function snippetIteratableObject() {
    let range = {
        from: 1,
        to: 5,

        // NOTE: raw implementation
        // [Symbol.iterator]() {
        //     return {
        //         current: this.from,
        //         last: this.to,
        //         next() {
        //             if (this.current <= this.last) {
        //                 return { done: false, value: this.current++ };
        //             } else {
        //                 return { done: true };
        //             }
        //         }
        //     };
        // }

        // NOTE: implementation throught generator function
        *[Symbol.iterator]() {
            for (let value = this.from; value <= this.to; value++) {
                yield value;
            }
        }
    };

    for (let i of range) {
        document.write(`${i}`);
    }
}