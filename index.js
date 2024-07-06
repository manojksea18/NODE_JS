// const http = require("http"); //import http where nodejs has to connect with server
// // const os = require("os");
// const fs = require("fs");
// http
//   .createServer((req, res) => {
//   res.write("<h1> whats upp ppl? </h1>");
//   res.end();
// })
// res.writeHead(200, { "Content-Type": "application/json" });
// //calculate your machine ram using os
// const myRam = os.totalmem().toFixed(2);
// res.end(
//   JSON.stringify({
//     data: myRam,
//   })
// );
// })
//   .listen(3000);

// fs.writeFileSync("app.txt", "whats up", (error, data) => {
//   console.log(data);
//   // console.log(error);
// });
// fs.writeFile("hello.txt", "ishan fataha", () => {});

//const textmanipulator = require("./string");
// const { properCase, slugify, truncate } = require("./string");

// const events = require("events");
// const evenEmitter = new events.EventEmitter();
// const sayHi = () => {
//   console.log("Hello");
// };

// //create a new event + Listen

// evenEmitter.on("scream", sayHi);

// //Fire
// evenEmitter.emit("scream");

// const properties = require("proper-upper-case");
// const properties = require("");

// const convert = (text) => {
//   return properties;
// };

//slugify
//lodash(truncate)
//decrypt js
//(pass encrypt => hello output $2)
////(pass verify  => hello output $2)

// const bcryptjs = require("bcryptjs");

// const encryptPw = (text) => bcryptjs.hashSync(text);
// const verifyPw = ({ hashText, text }) => {
//   bcryptjs.compareSync(text, hashText);
// };

// const hashPw = encryptPw("password");
// console.log(hashPw);

// const isValidPw = verifyPw({ text: "password", hashText: hashPw });
// console.log(isValidPw);
// module.exports(encryptPw,verifyPw)={

// }

//NODEMAILER
//text message
//file attach
// direct body image

// require("dotenv").config();
// const nodemailer = require("nodemailer");

// //transporter
// const transporter = nodemailer.createTransport({
//   service: process.env.EMAIL_SERVICE,
//   auth: {
//     user: process.env.EMAIL_USER,
//     pass: process.env.EMAIL_PW,
//   },
// });
// transporter.verify((err) => {
//   if (err) console.log(err);
//   console.log("email is working");
// });
// const sentEmail = async ({ email, subject, message, attachments }) => {
//   const info = await transporter.sendMail({
//     from: `"Manoj Khati" <${process.env.EMAIL_USER}>`, // sender address
//     to: email, // list of receivers
//     subject: subject, // Subject line
//     // text: "Hello world?", // plain text body
//     html: message,
//     attachments,
//   });
//   return info;
// };
// sentEmail({
//   email: "manojkhati321@gmail.com",
//   subject: "New Year Celebration",
//   message: "<div>Happy new year</div><img scr='cid:happy-new-year'>",
//   attachments: [
//     {
//       // filename: "text1.txt",
//       // path: "./app.txt",
//       path: "./js.png",
//       filename: "js.png",
//       cid: "happy-new-year",
//     },
//   ],
// });

//QR- code generator
// const qrcode = require("qrcode");

// const url = "https://assignment.com";

// qrcode.toString(url, { type: "terminal" }, (err, qr) => {
//   if (err) {
//     console.error("error generated", err);
//   } else {
//     console.log(qr);
//   }
// });

// const prompt = require("prompt-sync")();
// const currencyconv = require("currency-converter-lt");
// fromCurrency = prompt("Enter Currency to convert");
// toCurrency = prompt("Enter the Currency you want");
// amounttoConvert = 1;

// let currencyConverter = new currencyconv({
//   from: fromCurrency,
//   to: toCurrency,
//   amount: amounttoConvert,
// });
// currencyConverter.convert().then((response) => {
//   console.log(
//     amounttoConvert +
//       " " +
//       fromCurrency +
//       "is equal to" +
//       response +
//       " " +
//       toCurrency
//   );
// });

//PDFKIT
const PDFDocument = require("pdfkit");
const fs = require("fs");
// const path = require("path");

// Create a new PDF document
const pdfDoc = new PDFDocument();

// Pipe the PDF into a writable stream (create the PDF file)
pdfDoc.pipe(fs.createWriteStream("Document.pdf"));

// Add some text to the document
pdfDoc.text("This is my!", 100, 100);
// pdfDoc.fillColor("red").fontSize(17).text("PDF", 305, 150);

// Path to the image
// const imagePath = "./node.jpeg";

// Add an image
pdfDoc.image("./image.png", {
  fit: [250, 300],
  align: "center",
  valign: "center",
});

// Finalize the PDF and end the stream
pdfDoc.end();

console.log("PDF generated successfully:");
