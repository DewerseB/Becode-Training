const readlineSync = require("readline-sync");

function displayMenu() {
    console.log("");
    console.log("Please choose your actions:");
    console.log("");
    console.log("1 - List all the pizza flavors");
    console.log("2 - Add a new pizza flavor");
    console.log("3 - Remove a pizza flavor");
    console.log("4 - Exit this program");
    console.log("");
}

function manager() {
    let flavors = [];
    let choice = 0;
    console.log("Hello! Welcome to the Pizza Flavors Manager.");
    while (choice !== 4) {
        displayMenu();
        choice = parseInt(readlineSync.question("Enter your action's number: "), 10);
        console.log("");
        switch (choice) {
            case 1:
                console.log(flavors);
                break;
            case 2:
                flavors = addFlavor(flavors);
                break;
            case 3:
                flavors = removeFlavor(flavors);
                break;
            case 4:
                console.log("See you next time!");
                break;
            default :
                console.log("Invalid choice.");
                break;   
        }
    }
}

function addFlavor(flavors) {
    flavor = readlineSync.question("Enter the flavor you want to add: ");
    flavors.includes(flavor) ? console.log("This flavor already exists.") : flavors.push(flavor);
    return flavors;
}

function removeFlavor(flavors) {
    flavor = readlineSync.question("Enter the flavor you want to remove: ");
    flavors.includes(flavor) ? flavors.splice(flavors.indexOf(flavor), 1) : console.log("This flavor doesn\'t exist.");
    return flavors;
}

manager();



















