const readlineSync = require("readline-sync");

let min = new Number(readlineSync.question('Enter a minimum number: '));
let max = new Number(readlineSync.question('Enter a maximum number: '));
let current;
min <= max ? current = new Number(readlineSync.question('Enter a number to test ')) : console.log("The minimum should not be greater than the maximum.");
if (current !== undefined) {
    current >= min && current <= max ? console.log("The current number is between " + min + " and " + max) : console.log("The current number is not between " + min + " and " + max);
}