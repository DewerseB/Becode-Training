/**
 * Calculates the factorial of a number
 * 
 * @param {number} a an integer
 * 
 * @return {number} the factorial of a
 */
function factorial(a) {
    return (a <= 1) ? 1 : a * factorial(a - 1);
}

console.log(factorial(5));