const readlineSync = require("readline-sync");

let var1 = new Number(readlineSync.question("Can you give me a number?"));
let var2 = new Number(readlineSync.question("Can you give me another one?"));
console.log(var1 + " + " + var2 + " = " + (var1+var2));