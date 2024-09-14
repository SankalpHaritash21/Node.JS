const dgram = require("dgram");
const dnsPkt = require("dns-packet");

const server = dgram.createSocket("udp4");

server.on("message", (msg, rinfo) => {
  const incomming = dnsPkt.decode(msg);
  console.log({
    msg: incomming.questions,
    rinfo,
  });
});

server.bind(53, () => console.log("DNS is running on PORT 53"));
