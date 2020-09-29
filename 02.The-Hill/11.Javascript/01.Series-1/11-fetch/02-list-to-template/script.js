

(() => {
    // your code here
    document.getElementById('run').addEventListener('click', getHeroes);

    function getHeroes() {
        const template = document.getElementById('tpl-hero');
        const target = document.getElementById('target');
        const promise = fetch('http://localhost:3000/heroes');
        promise.then((response) => {
            return response.json();
        }).then((heroes) => {
            target.innerHTML = "";
            heroes.forEach((hero) => {
                //console.log(`${hero.alterEgo} known as ${hero.name}.\nMain abilities: ${hero.abilities}`);
                let temp = document.createElement('div');
                temp.innerHTML = template.innerHTML;
                temp.getElementsByClassName('name')[0].innerHTML = hero.name;
                temp.getElementsByClassName('alter-ego')[0].innerHTML = hero.alterEgo;
                temp.getElementsByClassName('powers')[0].innerHTML = hero.abilities;
                target.appendChild(temp.childNodes[1]);
            });
        });
    }
})();