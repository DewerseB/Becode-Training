const readlineSync = require("readline-sync");

function guessTheNb() {
    let n = Math.floor(Math.random()*100)+1;
    let nb = 0;
    console.log("Guess a number between 1 and 100, enter 101 to give up");
    while ( nb !== n && nb !== 101) {
        nb = parseInt(readlineSync.question('Guess the number: '), 10);
        nb === n ? console.log("Well guessed!") :
            nb === 101 ? console.log("Bouh! The number was " + n) :
                nb > n ? console.log("Too high") : console.log("Too low");
    }
}

guessTheNb();