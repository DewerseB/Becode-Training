// 06-dom/03-select-three/script.js - 6.3: select multiple elements by css selector


(() => {

    // your code here
    let targets = Array.from(document.getElementsByClassName('target'));
    targets.forEach(element => {
        element.innerHTML = "owned";
    });
})();
