// 11-fetch/03-details/script.js - 11.3: details


(() => {
    // your code here
    document.getElementById('run').addEventListener('click', getHeroes);

    function getHeroes() {
        const template = document.getElementById('tpl-hero');
        const target = document.getElementById('target');
        const heroId = document.getElementById('hero-id');


        const promise = fetch('http://localhost:3000/heroes');
        promise.then((response) => {
            return response.json();
        }).then((heroes) => {
            target.innerHTML = "";
            if (heroId.value > 0 && heroId.value <= heroes.length) {
                let hero = heroes[heroId.value-1];
                let temp = document.createElement('div');
                temp.innerHTML = template.innerHTML;
                temp.getElementsByClassName('name')[0].innerHTML = hero.name;
                temp.getElementsByClassName('alter-ego')[0].innerHTML = hero.alterEgo;
                temp.getElementsByClassName('powers')[0].innerHTML = hero.abilities;
                target.appendChild(temp.childNodes[1]);
            }
        });
    }
})();
