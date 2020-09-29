const readlineSync = require("readline-sync");

let firstName;
let name;
let color;
let animal;
let number;

for (i = 5 ; i > 0 ; i--) {
    console.log("Remaining question(s): " + i);
    switch (i) {
        case 5 :
            firstName = readlineSync.question('What is your first name? ');
            break;
        case 4 :
            name = readlineSync.question('What is your name? ');
            break;
        case 3 :
            color = readlineSync.question('What is your favorite color? ');
            break;
        case 2 :
            animal = readlineSync.question('What is your favorite animal? ');
            break;
        case 1 :
            number = readlineSync.question('What is your favorite number? ');
            break;            
    }
}

console.log("Once upon a time, a nice person named " + firstName + " " + name + " was lost in a forest. Thankfully, " + number + " " + color + " " + animal + "s came to the rescue!");