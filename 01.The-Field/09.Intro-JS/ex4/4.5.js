/**
 * Calculates the distance between 2 points in a cartesian plane
 * 
 * @param {array} a an array of 2 numbers
 * @param {array} b an array of 2 numbers
 * 
 * @return {number} the distance between the 2 coordinates
 */
function calcDistance(a, b) {
    return Math.sqrt(Math.pow((b[0]-a[0]), 2) + Math.pow((b[1]-a[1]), 2));
}

let a = [1, 1];
let b = [2, 2];

console.log(calcDistance(a,b));