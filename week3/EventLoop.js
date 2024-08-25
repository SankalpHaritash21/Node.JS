const fs = require("fs"); // Correct import
const a = 100;

setImmediate(() => console.log("SetImmediate"));

// Use the imported `readFile` directly instead of `fs.readFile`
fs.readFile("./file.txt", "utf8", () => console.log("Read File CB"));

setTimeout(() => console.log("Time Expired"), 0);

function PrintA() {
  console.log("a=", a);
}

PrintA();

console.log("Last Line of File");

// OutPut of Code
// a= 100
// Last Line of File
// SetImmediate
// Time Expired
// Read File CB
