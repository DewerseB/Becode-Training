// 05-arrays/14-bird-names-generator/script.js - 5.14: Bird names generator in French


(() => {
    const birds = [
        {name: "mouette", fem: true},
        {name: "corbeau"},
        {name: "mésange", fem: true},
        {name: "hibou"},
        {name: "buse", fem: true},
        {name: "pigeon"},
        {name: "pie", fem: true},
        {name: "vautour"},
        {name: "faucon"},
        {name: "rouge-gorge"},
        {name: "tourterelle", fem: true},
        {name: "corneille", fem: true},
    ];
    const adjectives = new Set([
        "cendré",
        "huppé",
        "chantant",
        "hurlant",
        "perché",
        "grand",
        "petit",
        "bleu",
        "pantelant",
        "tangent",
        "arboré",
    ]);

    // your code here
    document.getElementById('run').addEventListener('click', () => {
        let birdId = Math.floor(Math.random() * birds.length);
        let randBird = birds[birdId].name;
        let randAdj = Array.from(adjectives)[Math.floor(Math.random() * adjectives.size)];
        birds[birdId].fem ? console.log(randBird + " " + randAdj + "e") : console.log(randBird + " " + randAdj);
    });
})();
