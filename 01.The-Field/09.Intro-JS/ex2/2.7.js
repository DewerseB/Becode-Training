const readlineSync = require("readline-sync");

let n = parseInt(readlineSync.question('Enter a small number: '), 10);
let m = 0;

for (let i = 1 ; i <= n ; i++) {
    m += parseInt(readlineSync.question('Enter another number: '), 10);
}

console.log(m);