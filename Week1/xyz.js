console.log("Multiplication Function Executed");

//? Module protects their variable and function from leaking so to access them u need to export them to use them.
//? in strict mode u can define a variable without var, let, const.

function fun(a, b) {
  console.log(a + b);
}

var x1 = "Hi Sankalp";

console.log("What is module.export", module.exports);

module.exports = {
  x1: x1,
  fun: fun,
};
console.log("What is module.export", module.exports);
