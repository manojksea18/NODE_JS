const http = require("http");
const os = require("os");

http
  .createServer((req, res) => {
    res.writeHead(200, { "Content-Type": "application/json" });

    //calculate your machine ram using os
    const myRam = os.totalmem().toFixed(2);
    res.end(
      JSON.stringify({
        data: myRam,
      })
    );
  })
  .listen(3000);
