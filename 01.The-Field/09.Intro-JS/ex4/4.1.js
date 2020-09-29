const readlineSync = require("readline-sync");

/**
 * Calculates the surface of a rectangle.
 * 
 * @param {number} length the length of the rectangle
 * @param {number} width the width of the rectangle
 * 
 * @return {number} the surface of the rectangle
 */
function calcSurface(length, width) {
    return length * width;
}

console.log(calcSurface(4, 5));

let length = parseInt(readlineSync.question('Enter the length: '), 10);
let width = parseInt(readlineSync.question('Enter the width: '), 10);

console.log("The surface of your rectangle is " + calcSurface(length, width));