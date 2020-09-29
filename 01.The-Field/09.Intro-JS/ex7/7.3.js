const readlineSync = require("readline-sync");

function divisors(nb) {
    let div = [];
    for (let i = 2; i < nb; i++) {
        nb % i === 0 && div.push(i);
    }
    return div;
}

let nb = parseInt(readlineSync.question('Enter a positive integer: '), 10);
console.log(divisors(nb));