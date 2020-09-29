/**
 * Function generating a random number between 1 and 10.
 * Uses Math.random to generate a number between [0, 1[
 * Multiplies the number by 10 to get a number between [0, 10[
 * Adds 1 to get a number between [1, 10]
 * 
 * @return {number} a number between 1 and 10
 */
function rand10() {
    return (Math.floor(Math.random() * 10) + 1);
}

console.log(rand10());