const fs = require("fs");
const crypto = require("crypto");

process.env.UV_THREADPOOL_SIZE = 2;
/*
Setting UV_THREADPOOL_SIZE to a specific number (e.g., 2) configures the number of threads in the libuv thread pool, directly influencing how many I/O-bound operations Node.js can handle concurrently.
It must be set before the Node.js process starts to take effect. This can be done using environment variables on the command line, through configuration scripts, or using tools like Docker or Kubernetes.
Use cases include optimizing performance for I/O-bound tasks, limiting resource usage, or finding the best configuration for an application's specific workload.
*/

crypto.pbkdf2("password", "salt", 5000000, 50, "sha512", (err, key) => {
  console.log("1. CryptoPBKDF2 done");
});

crypto.pbkdf2("password", "salt", 5000000, 50, "sha512", (err, key) => {
  console.log("2. CryptoPBKDF2 done");
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

crypto.pbkdf2("password", "salt", 5000000, 50, "sha512", (err, key) => {
  console.log("6. CryptoPBKDF2 done");
});

/*
Understanding the crypto.pbkdf2 Function
The crypto.pbkdf2 function performs a password-based key derivation function. Here's how it works:

Inputs: It takes a password, a salt, the number of iterations, the desired key length, and a hash algorithm to produce a derived key. The inputs in this case are:

"password": The base password to hash.
"salt": A salt value to make the hash output unique.
5000000: Number of iterations to perform, making the operation computationally expensive to resist brute-force attacks.
50: The length of the derived key (in bytes).
"sha512": The hashing algorithm to use (SHA-512 in this case).
Callback: It accepts a callback function (err, key) that will be executed after the hashing operation is complete:

err: An error object, if any errors occur during the process.
key: The resulting derived key.
4. How Asynchronous Execution Works
The crypto.pbkdf2 function is asynchronous, meaning that it will not block the main thread while performing the hash calculation. Instead, it offloads this work to a background thread, which allows the program to continue running other code in the meantime. Here’s the flow:

All six crypto.pbkdf2 calls are initiated almost simultaneously.
Each call runs in the background, and when it finishes, it invokes its respective callback function.
The callback simply logs a message to the console to indicate completion.
5. Order of Execution and Output
Even though the calls are made one after the other in the code, they do not necessarily complete in that order. The asynchronous nature of the crypto.pbkdf2 function means that each operation will take a variable amount of time, depending on system resources and load. Therefore, the order in which "CryptoPBKDF2 done" messages are logged may not match the order in which the pbkdf2 functions were called.

For example, the output might look something like this:

1. CryptoPBKDF2 done
3. CryptoPBKDF2 done
2. CryptoPBKDF2 done
5. CryptoPBKDF2 done
4. CryptoPBKDF2 done
6. CryptoPBKDF2 done
The numbers represent the order of function invocation, but the output order is based on how quickly each function completes its operation.

Summary of Execution Flow
The program starts and immediately initiates six PBKDF2 hashing operations.
Each hashing operation runs independently in the background, using system resources efficiently.
As each operation completes, it logs a message indicating its completion.
The console output reflects the order in which the operations finished, which may vary with each execution due to the asynchronous nature of the code.
Key Points:
The asynchronous execution prevents the program from being blocked, allowing multiple hashing operations to run concurrently.
This approach is scalable, as more hashing operations can be added without blocking the main execution thread.
The PBKDF2 function is used to securely hash passwords, with the high number of iterations enhancing security against brute-force attacks.
*/
