const readlineSync = require("readline-sync");

let shoeSize = readlineSync.question('What is your shoe size? ');
let birthYear = readlineSync.question('And your birth year? ');

let mess = (((shoeSize*2)+5)*50)-birthYear+1766;
console.log(mess);