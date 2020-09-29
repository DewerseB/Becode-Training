// 11-fetch/05-delete/script.js - 11.5: supprimer un élément


(() => {
    // your code here
    document.getElementById('run').addEventListener('click', delHero);

    function delHero() {
        let url = 'http://localhost:3000/heroes';
        let heroId = document.getElementById('hero-id').value;
        displayHeroes(url);
        deleteHero(url, heroId);
    }

    function displayHeroes(url) {
        fetch(url)
        .then((response) => {
            if (response.ok) {
                return response.json();
            } else {
                throw Error(response.statusText);
            }
        })
        .then((heroes) => console.log(heroes))
        .catch((error) => window.alert(error));
    }

    function deleteHero(url, id) {
        fetch(url + '/' + id, {method: 'delete'})
        .then((response) => {
            if (response.ok) {
                return response.json();
            } else {
                throw Error(response.statusText);
            }
        }).catch((error) => window.alert(error));
    }
})();
