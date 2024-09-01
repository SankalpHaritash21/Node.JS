const fs = require("fs");
const crypto = require("crypto");

crypto.pbkdf2("password", "salt", 5000000, 50, "sha512", (err, key) => {
  console.log("1. CryptoPBKDF2 done");
});

crypto.pbkdf2("password", "salt", 5000000, 50, "sha512", (err, key) => {
  console.log("2. CryptoPBKDF2 done");
});

fs.readFile("./file.txt", "utf8", () => {
  console.log("Read File CB");
});

crypto.pbkdf2("password", "salt", 5000000, 50, "sha512", (err, key) => {
  console.log("3. CryptoPBKDF2 done");
});

crypto.pbkdf2("password", "salt", 5000000, 50, "sha512", (err, key) => {
  console.log("4. CryptoPBKDF2 done");
});

crypto.pbkdf2("password", "salt", 5000000, 50, "sha512", (err, key) => {
  console.log("5. CryptoPBKDF2 done");
});
