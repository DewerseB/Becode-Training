const readlineSync = require("readline-sync");

function rand10() {
    return (Math.floor(Math.random() * 10) + 1);
}

/**
 * Generate multiple number between [1, 10] using the rand10() function.
 * 
 * @param {number} n the amount of random number needed
 * 
 * @return {array} an array of n numbers 
 */
function multiRand(n) {
    let arr = [];
    for (let i = 1; i <= n; i++) {
        arr.push(rand10());
    }
    return arr;
}

/**
 * Calculates and returns the average of the numbers in an array.
 * 
 * @param {array} arr an array of numbers
 * 
 * @return {number} the average of the numbers inside the array
 */
function average(arr) {
    let sum = 0;
    for (let elem of arr) {
        sum += elem;
    }
    return (sum/arr.length);
}

/**
 * Calculates and returns the lowest number inside an array.
 * 
 * @param {array} arr an array of numbers
 * 
 * @return {number} the lowest value inside the array
 */
function min(arr) {
    let min = arr[0];
    for (let i = 1 ; i < arr.length ; i++) {
        arr[i] < min && (min = arr[i]);
    }
    return min;
}

/**
 * Calculates and returns the highest number inside an array.
 * 
 * @param {array} arr an array of numbers
 * 
 * @return {number} the highest value inside the array
 */
function max(arr) {
    return Math.max(...arr);
}

let nb = parseInt(readlineSync.question('How many number do you want? '), 10);
let arr = multiRand(nb);
console.log(arr);
console.log("Average: " + average(arr));
console.log("Min: " + min(arr));
console.log("Max: " + max(arr));