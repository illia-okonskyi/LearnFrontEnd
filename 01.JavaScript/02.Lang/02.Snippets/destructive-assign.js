"use strict"

function showMenu({ title = "Menu", width = 100, height = 200 } = {}) {
    document.writeln(`showMenu ${title} ${width} ${height} </br>`);
}

function snippetDestructiveAssign() {
    showMenu(); // Menu 100 200
    showMenu({ title: "Custom menu", width: 500 }); // Custom Menu 500 200
}