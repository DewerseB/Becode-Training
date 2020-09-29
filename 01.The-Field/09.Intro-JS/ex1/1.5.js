const readlineSync = require("readline-sync");

let var1 = Math.floor(readlineSync.question('Give me a number with a decimal '));
let var2 = readlineSync.question('And another one ');
console.log(var1 + " * " + var2 + " = " + (var1*var2));