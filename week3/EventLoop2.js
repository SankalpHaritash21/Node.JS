const fs = require("fs");
const a = 100;

setImmediate(() => console.log("set Immediate"));

// Promise.resolve(() => console.log("Promise"));

Promise.resolve("Promise").then(() => {
  console.log("Promise");
});

fs.readFile("./file.txt", "utf8", () => {
  setTimeout(() => console.log("2 Time Expired"), 0);

  process.nextTick(() => console.log("2 Process Next Tick"));
  setImmediate(() => console.log("2 set Immediate"));

  Promise.resolve("Promise").then(() => {
    console.log("2 Promise");
  });

  console.log("Read File CB");
});

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
2 Process Next Tick
2 Promise
2 set Immediate
2 Time Expired
*/
