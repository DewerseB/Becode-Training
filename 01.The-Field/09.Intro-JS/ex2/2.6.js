const readlineSync = require("readline-sync");

let day = parseInt(readlineSync.question('Enter a number between 1 and 7: '), 10);

if ( day >= 1 && day <= 7) {
    switch (day) {
        case 1:
            console.log("Monday");
            break;
        case 2:
            console.log("Tuesday");
            break;
        case 3:
            console.log("Wednesday");
            break;
        case 4:
            console.log("Thursday");
            break;
        case 5:
            console.log("Friday");
            break;
        case 6:
            console.log("Saturday");
            break;
        case 7:
            console.log("Sunday");
            break;                                      
    }
} else {
    console.log(day + " is not between 1 and 7!");
}