"use strict"

// function loadScript(src) {
//     return new Promise(function(resolve, reject) {
//         let script = document.createElement('script');
//         script.src = src;

//         script.onload = () => resolve(script);
//         script.onerror = () => reject(new Error(`Failed to load script ${src}`));

//         document.head.append(script);
//     });
// }

function loadScript(src, result) {
    return new Promise(function(resolve, reject) {
        let script = { src: src };
        if (result) {
            resolve(script);
        } else {
            reject(new Error(`Failed to load script ${src}`));
        }

    })
}

function rawPromises() {
    let promise = loadScript("https://cdnjs.cloudflare.com/ajax/libs/lodash.js/4.17.11/lodash.js", true);

    // first (independant from second) handler on same promise
    promise.then(script => document.writeln('One more handler <br />'));

    return promise.then(
        script => {
            document.writeln(`${script.src} loaded! <br />`);
            return loadScript("https://cdnjs.cloudflare.com/ajax/libs/lodash.js/4.17.11/lodash-2.js", false);
        }
    ).catch( // then returns new promise
        error => {
            document.writeln(`Error: ${error.message} <br />`);
            return Promise.resolve();
        }
    );
}

async function asyncAwaitPromises() {
    try {
        let script1 = await loadScript("https://cdnjs.cloudflare.com/ajax/libs/lodash.js/4.17.11/lodash.js", true);
        let script2 = await loadScript("https://cdnjs.cloudflare.com/ajax/libs/lodash.js/4.17.11/lodash-2.js", false);
    } catch (error) {
        document.writeln(`Error: ${error.message} <br />`);
    }
}

function snippetPromise() {
    rawPromises()
        .then(() => asyncAwaitPromises())
        .then(() => document.writeln(`<br /> ===================== <br />`));
}

// NOTE: usage of async/await at top level code can be done like this:
// (async () => {
//     let response = await fetch('/article/promise-chaining/user.json');
//     let user = await response.json();
//     ...
//   })();