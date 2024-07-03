const http = require("http");
const os = require("os");
const fs = require("fs");

http
  .createServer((req, res) => {
    // res.writeHead(200, { "Content-Type": "application/json" });
    // //calculate your machine ram using os
    // const myRam = os.totalmem().toFixed(2);
    // res.end(
    //   JSON.stringify({
    //     data: myRam,
    //   })
    // );
  })
  .listen(3000);

fs.readFile("hello.txt", "utf8", (error, data) => {
  console.log(data);
  // console.log(error);
});
fs.writeFile("hello.txt", "ishan fataha", () => {});
