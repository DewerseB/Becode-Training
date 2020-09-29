const readlineSync = require("readline-sync");

let age = readlineSync.question('What is your age? ');

age >= 18 ? console.log("You are an adult.") : console.log("You are not yet an adult.");