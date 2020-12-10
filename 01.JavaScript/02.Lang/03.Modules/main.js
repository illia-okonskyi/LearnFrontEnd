import { MY_MODULE_NAME, MyNumber, MyNumberFunctions } from "./my-module/my-module.js"

document.writeln(`MY_MODULE_NAME = ${MY_MODULE_NAME} <br />`);

var a = new MyNumber(10);
var b = new MyNumber(3);

var sum = MyNumberFunctions.add(a, b);
var substract = MyNumberFunctions.substract(a, b);

document.writeln(`sum = ${sum} <br />`);
document.writeln(`substract = ${substract} <br />`);