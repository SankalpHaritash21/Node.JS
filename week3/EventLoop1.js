const fs = require("fs");
const a = 100;

setImmediate(() => console.log("set Immediate"));

// Promise.resolve(() => console.log("Promise"));

Promise.resolve("Promise").then(() => {
  console.log("Promise");
});

fs.readFile("./file.txt", "utf8", () => console.log("Read File CB"));

setTimeout(() => console.log("Time Expired"), 0);

process.nextTick(() => console.log("Process Next Tick"));

function PrintA() {
  console.log("a=", a);
}

PrintA();

console.log("Last Line of File");

/*
Output:

a= 100
Last Line of File
Process Next Tick
Promise
Time Expired
set Immediate
Read File CB

*/
