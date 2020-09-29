const readlineSync = require("readline-sync");

/**
 * Creates an object about the favorite TV serie of the user:
 * ask the name, the production year, and an undefined number of actors.
 * 
 * @return an object contening the answers
 */
function askTvSerie() {
    let tvSerie = {
        "name" : "",
        "prodYear" : "",
        "casting" : [],
    };
    tvSerie.name = readlineSync.question('What is the name of your favorite TV serie? ');
    tvSerie.prodYear = readlineSync.question('What is the production year? ');
    let actor = readlineSync.question('Name an actor, leave empty to finish: ');
    while (actor !== "") {
        tvSerie.casting.push({"actor" : actor});
        actor = readlineSync.question('Name an actor, leave empty to finish: ');
    }
    return tvSerie;
}

console.log(JSON.stringify(askTvSerie()));