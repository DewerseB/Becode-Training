// 05-arrays/11-dedupe-array/script.js - 5.11: de-dupe the array


(() => {

    const fruits = [
        "cerise",
        "durian",
        "pomme",
        "poire",
        "fraise",
        "tomate",
        "orange",
        "mandarine",
        "fraise",
        "durian",
        "pêche",
        "cerise",
        "raisin",
        "cerise",
    ];

    // your code here
    document.getElementById('run').addEventListener('click', () => {
        let uniqFruits = [];
        fruits.forEach(fruit => !uniqFruits.includes(fruit) && uniqFruits.push(fruit));
        console.log(uniqFruits);
    });
})();
