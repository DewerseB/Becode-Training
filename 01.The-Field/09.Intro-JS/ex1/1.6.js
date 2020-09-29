const readlineSync = require("readline-sync");

let var1 = readlineSync.question('Give me an integer ');
let var2 = readlineSync.question('And another one ');
console.log(var1%var2);