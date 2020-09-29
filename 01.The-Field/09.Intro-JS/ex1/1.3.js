const readlineSync = require("readline-sync");

let firstName = readlineSync.question('Tell me your first name plz ');
console.log("Hello " + firstName);