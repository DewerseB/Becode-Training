// 11-fetch/01-list-to-console/script.js - 11.1: liste vers console


(() => {
    // your code here
    document.getElementById('run').addEventListener('click', getHeroes);

    function getHeroes() {
        const promise = fetch('http://localhost:3000/heroes');
        promise.then((response) => {
            return response.json();
        }).then((heroes) => {
            heroes.forEach((hero) => {console.log(`${hero.alterEgo} known as ${hero.name}.\nMain abilities: ${hero.abilities}`)});
        });
    }
})();