const { constants } = require("buffer");
var slugify = require("slugify");
const a = "manoj";
const b = "khati";

const properCase = (a, b) => {
  const data =
    a.charAt(0).toUpperCase() +
    a.slice(1) +
    " " +
    b.charAt(0).toUpperCase() +
    b.slice(1);
  console(data);
};

const slugify = (arr) => {
  return arr.toLowerCase().toString().split("").join("-");
};
console.log(slugify("Hello world"));

const truncate = (arr) => {
  const num = prompt("Enter the number");
  if (arr.length > num) {
    return arr.slice(0, num) + "...";
  }
  return arr;
};
console.log(truncate("Hello world This is my first time am using js"));
module.exports = {
  properCase,
  slugify,
  truncate,
};
