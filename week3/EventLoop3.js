const fs = require("fs");

setImmediate(() => console.log("setImmediate"));

setTimeout(() => console.log("Time Expired"));

Promise.resolve().then(() => console.log("Promise"));

fs.readFile("./file.txt", "utf8", () => {
  console.log("file read CB");
});

process.nextTick(() => {
  process.nextTick(() => console.log("inner nextTick"));
  console.log("nextTick");
});

console.log("Last Line of file");

/*
Output:

Last Line of file
inner nextTick
Promise
Time Expired
setImmediate
file read CB
*/
