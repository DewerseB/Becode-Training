const readlineSync = require("readline-sync");

function fibonacciSeq(nb) {
    let sequence = [];
    nb > 0 && sequence.push(0);
    nb > 1 && sequence.push(1);
    for (let i = 2; i < nb; i++) {
        sequence.push(sequence[i-2] + sequence[i-1]);
    }
    return sequence;
}

let nb = parseInt(readlineSync.question('Enter a positive integer: '), 10);
console.log(fibonacciSeq(nb));