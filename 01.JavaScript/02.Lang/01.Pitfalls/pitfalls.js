"use strict"

const $ = document.writeln.bind(document);
const objectVar = {};
const arrayVar = [4, 5, "abc"];

// 0 Syntax
$("=== 0 Syntax === <br />")
$("<ul>");

$("<li><p>");
$("!!! Always end expressions with semicolon \";\". Missed semicolon can be reason of numerous bugs<br/>");
$("</p></li>");

$("</ul>");

// 1 Type checking
$("=== 1 Type checking === <br />")
$("<ul>");

$("<li><p>");
$("Known bug of JS: typeof null returns object not null<br/>");
$(`<code>typeof null = ${typeof null}</code><br/>`);
$("</p></li>");

$("<li><p>");
$("Function is the object but typeof handles functions in a separate way<br/>");
$(`<code>typeof alert = ${typeof alert}</code><br/>`);
$("</p></li>");

$("<li><p>");
$("typeof of primitive constructed as object is object (<code>typeof new Number(15); // \"object\"</code>)<br/>");
$(`<code>typeof alert = ${typeof alert}</code><br/>`);
$("</p></li>");

$("<li><p>");
$("typeof of classes is \"function\"<br/>");
$("</p></li>");

$("<li><p>");
$("<code>{}.toString.call(obj_primitive_classWithOverriden[Symbol.toStringTag]) " +
    "// returns [object ...] where ... is class name (Object, Number, Date, Array, etc.) or tag</code><br/>");
$("</p></li>");

$("<li><p>");
$("<code>a instanceof B</code> checks B.prototype but not B and is equivalent for <code>a.__proto__ == B.prototype</code><br/>");
$("</p></li>");


$("</ul>");

// 2 Type convertions
$("=== 2 Type convertions === <br />")
$("<ul>");

$("<li><p>");
$("String convertion is used when code context requires string (note that Symbols aren't automatically converted to strings)<br/>");
$("<code>let str = String(15);</code><br/>");
$("<code>alert(15);</code><br/>");
$("<code>let str = someSymbolVariable.toString()</code><br/>");

$("</p></li>");

$("<li><p>");
$("Number convertion is used when code context requires number (e.g. comparision operators)<br/>");
$("<code>let num = Number(\"15\");</code><br/>");
$("<code>let num = +\"15\";</code><br/>");
$("<code>\"6\" / \"2\"</code> is calculated like <code>Number(\"6\") / Number(\"2\")</code><br/>");
$(`<code>Number(undefined) = ${Number(undefined)}</code><br/>`);
$(`<code>Number(null) = ${Number(null)}</code><br/>`);
$(`<code>Number(true) = ${Number(true)}</code><br/>`);
$(`<code>Number(false) = ${Number(false)}</code><br/>`);
$(`<code>Number("  15  ") = ${Number("  15  ")}</code><br/>`);
$(`<code>Number("") = ${Number("")}</code><br/>`);
$(`<code>Number("hello") = ${Number("hello")}</code><br/>`);
$(`<code>Number("2 hello") = ${Number("2 hello")}</code><br/>`);
$("</p></li>");

$("<li><p>");
$("Boolen convertion is used when code context requires boolen (e.g. if operator)<br/>");
$("<code>let bool = Boolean(\"true\");</code><br/>");
$("<code>let bool = !!\"true\";</code><br/>");
$("<code>\"false\" || \"false\"</code> is calculated like <code>Boolean(\"false\") || Boolean(\"false\")</code><br/>");
$(`<code>Boolean(undefined) = ${Boolean(undefined)}</code><br/>`);
$(`<code>Boolean(null) = ${Boolean(null)}</code><br/>`);
$(`<code>Boolean(0) = ${Boolean(0)}</code><br/>`);
$(`<code>Boolean(NaN) = ${Boolean(NaN)}</code><br/>`);
$(`<code>Boolean("") = ${Boolean("")}</code><br/>`);
$(`<code>Boolean(1) = ${Boolean(1)}</code><br/>`);
$(`<code>Boolean(-1) = ${Boolean(-1)}</code><br/>`);
$(`<code>Boolean(15) = ${Boolean(15)}</code><br/>`);
$(`<code>Boolean(Infinity) = ${Boolean(Infinity)}</code><br/>`);
$(`<code>Boolean(-Infinity) = ${Boolean(-Infinity)}</code><br/>`);
$(`<code>Boolean("not empty") = ${Boolean("not empty")}</code><br/>`);
$(`<code>Boolean("0") = ${Boolean("0")}</code><br/>`);
$(`<code>Boolean("true") = ${Boolean("true")}</code><br/>`);
$(`<code>Boolean("false") = ${Boolean("false")}</code><br/>`);
$(`<code>Boolean({}) = ${Boolean(objectVar)}</code><br/>`);
$("</p></li>");

$("</ul>");

// 3 Operators
$("=== 3 Operators === <br />")
$("<ul>");

$("<li><p>");
$("Binary + operator uses Number context, but if one of the operand is not number - string context is used<br/>");
$(`<code>1 + 2 = ${1 + 2}</code><br/>`);
$(`<code>"1" + 2 = ${"1" + 2}</code><br/>`);
$(`<code>1 + "2" = ${1 + "2"}</code><br/>`);
$(`<code>2 + 2 + "1" = ${2 + 2 + "1"}</code><br/>`);
$(`<code>2 + {} = ${2 + objectVar}</code><br/>`);
$(`<code>2 + [4, 5, "abc"] = ${2 + arrayVar}</code><br/>`);
$("</p></li>");

$("<li><p>");
$("Comparision operators use number context (except ===)<br/>");
$(`<code>Boolean(0) == Boolean("0") = ${Boolean(0) == Boolean("0")}</code><br/>`);
$(`<code>0 == "0" = ${0 == "0"}</code><br/>`);
$(`!!! Null is equal to undefined and them are not equal to anymore</code><br/>`);
$(`<code>null == undefined = ${null == undefined}</code><br/>`);
$(`<code>null === undefined = ${null === undefined}</code><br/>`);
$("</p></li>");

$("<li><p>");
$("Boolean operators returns last falsy or truthy value<br/>");
$(`<code>null || 2 && 3 || 4 = ${ null || 2 && 3 || 4}</code><br/>`);
$("</p></li>");

$("<li><p>");
$("Null coalescing operator ?? can be used with boolean operators with parantheses<br/>");
$(`<code>let x = 1 && 2 ?? 3; // Syntax error</code><br/>`);
$(`<code>let x = (1 && 2) ?? 3; // OK</code><br/>`);
$("</p></li>");

$("</ul>");

// 4 Expressions
$("=== 4 Expressions === <br />")
$("<ul>");

$("<li><p>");
$("!!! Comparision in switch-case expression is always ===<br/>");
$("</p></li>");

$("<li><p>");
$("!!! Any experssion can be in case (switch-case operator)<br/>");
$(`<code>let a = "1", b = 0;</code><br/>`);
$(`<code>switch(+a) {</code><br/>`);
$(`<code>&nbsp&nbsp case b + 1: {</code><br/>`);
$(`<code>&nbsp&nbsp&nbsp&nbsp ... </code><br/>`);
$("</p></li>");

$("<li><p>");
$("!!! Multiline return expression must be in parantheses<br/>");
$(`<code>return (</code><br/>`);
$(`<code>&nbsp&nbsp some + long + </code><br/>`);
$(`<code>&nbsp&nbsp expression</code><br/>`);
$(`<code>&nbsp&nbsp ) </code><br/>`);
$("</p></li>");
$("</ul>");

// 5 Objects
$("=== 5 Objects === <br />")
$("<ul>");

$("<li><p>");
$("Properties with natural numeric keys (1,2,3, etc.) are always stored as sorted, other props are stored in creation order<br/>");
$("</p></li>");

$("<li><p>");
$("Arrays, dates and exceptions are objects types but extend object type behavior<br/>");
$("</p></li>");

$("<li><p>");
$("Dot operator (.) returns Reference type which is triplet (object, prop-name, strict-mode)<br/>");
$("</p></li>");

$("<li><p>");
$("Technically any function can be constructor. new operator simply creates object at start (this = new object) and returns this<br/>");
$("</p></li>");

$("<li><p>");
$("Constructors can return only this or any object<br/>");
$("</p></li>");

$("<li><p>");
$("Method [Symbol.toPrimitive](hint) is used to convert object to primitive and must return primitive value<br/>");
$("</p></li>");


$("<li><p>");
$("Special property __proto__ can be only object or null (can introduce bugs when object is used like associative map)<br/>");
$("</p></li>");

$("</ul>");

// 6 Functions
$("=== 6 Functions === <br />")
$("<ul>");

$("<li><p>");
$("Lambdas (arrow functions) have no own \"this\", \"arguments\", \"super\" and its' value is got from outer function declaration or expression<br/>");
$("</p></li>");

$("<li><p>");
$("Arrays, dates and exceptions are objects types but extend object type behavior<br/>");
$("</p></li>");

$("</ul>");

// 7 Arrays
$("=== 7 Arrays === <br />")
$("<ul>");

$("<li><p>");
$("default behavior for sort method is convert items to strings and sort them and lexigraphical order<br/>");
$("</p></li>");

$("</ul>");

$("===============<br />");