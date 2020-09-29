// 05-arrays/02-manipulate-array/script.js - 5.2: manipulate array

(() => {

    let fruits = [
        "pomme",
        "poire",
        "fraise",
        "tomate",
        "orange",
        "mandarine",
        "durian",
        "pêche",
        "raisin",
        "cerise",
    ];

    // your code here
    document.getElementById('run').addEventListener('click', () => {
        fruits.splice(0, 1, 'banana');
        fruits.splice(11, 1, 'kiwi');
        window.alert(fruits);
    });
})();
