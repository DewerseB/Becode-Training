// 11-fetch/04-add/script.js - 11.4: ajouter un élément


(() => {
    // your code here
    document.getElementById('run').addEventListener('click', getHeroes);

    function getHeroes() {
        const name = document.getElementById('hero-name');
        const alterEgo = document.getElementById('hero-alter-ego');
        const powers = document.getElementById('hero-powers');

        const template = {
            "id": "",
            "name": "",
            "alterEgo": "",
            "abilities": []
          }

        const promise = fetch('http://localhost:3000/heroes');
        promise.then((response) => {
            return response.json();
        }).then(async (heroes) => {
            //let hero = new Hero(heroes.length+1, name.value, alterEgo.value, powers.value.split(', '));
            let hero = template;
            hero.id = heroes.length+1;
            hero.name = name.value;
            hero.alterEgo = alterEgo.value;
            hero.abilities = powers.value.split(', ');
            
            heroes.push(hero);
            await fetch(`http://localhost:3000/heroes/`, {
                method: 'post',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(hero)
            })
                .then(response => response.json())
                .then(() => {
                    console.log(heroes);
            });
        });
    }
})();
