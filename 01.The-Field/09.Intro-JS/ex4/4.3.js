const readlineSync = require("readline-sync");

function rand10() {
    return (Math.floor(Math.random() * 10) + 1);
}

/**
 * Generate multiple number between [1, 10] using the rand10() function.
 * 
 * @param {number} n the amount of random number needed
 * 
 * @return {Array} an array containing n random numbers
 */
function multiRand(n) {
    let arr = [];
    for (let i = 1; i <= n; i++) {
        arr.push(rand10());
    }
    return arr;
}

let nb = parseInt(readlineSync.question('How many number do you want? '), 10);
console.log(multiRand(nb));