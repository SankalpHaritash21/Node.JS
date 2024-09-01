const http = require("http");

const server = http.createServer(function (req, res) {
  if (req.url === "/getSecret") res.end("No Secret Data");

  res.end("Welcome to Server!");
});

server.listen(7777);
