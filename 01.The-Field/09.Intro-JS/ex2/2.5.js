const readlineSync = require("readline-sync");

let nb = parseInt(readlineSync.question('What is your favorite number? '), 10);

while (nb !== 42) {
    console.log("Are you sure?");
    nb = parseInt(readlineSync.question('What is your favorite number? '), 10);
}

console.log("Gratz, you know the answer to life, the universe, and everything");