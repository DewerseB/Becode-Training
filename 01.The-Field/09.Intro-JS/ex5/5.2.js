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

/**
 * Sorts randomly the array 'casting' inside an object.
 * 
 * @param {object} serie an object containing a casting array to sort
 */
function randomizeCast(serie) {
    serie.casting.sort(() => Math.random() - 0.5);
    return serie;
}

let serieTv = askTvSerie();
console.log(JSON.stringify(serieTv));
serieTv = randomizeCast(serieTv);
console.log(JSON.stringify(serieTv));