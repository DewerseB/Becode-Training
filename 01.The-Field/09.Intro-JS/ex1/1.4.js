const readlineSync = require("readline-sync");

let name = readlineSync.question('Tell me your name please ');
let firstName = readlineSync.question('Now your first name ');
let city = readlineSync.question('And your city ');
console.log("Hello " + firstName + " " + name + ", you live in " + city);