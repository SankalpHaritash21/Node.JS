require("./hi.js"); // one module into another
const { fun, x1 } = require("./xyz.js");

const { mul, Power } = require("./calculate");

//import { x1, fun } from "./xyz.js";
var x = "Sankalp Haritash";

var a = 1;
var b = 2;

mul(10, 30);
Power(10, 30);

fun(a, b);

console.log(x1);
console.log(x);
console.log(a + b);

console.log(this);

console.log(globalThis);

console.log(globalThis === global);
