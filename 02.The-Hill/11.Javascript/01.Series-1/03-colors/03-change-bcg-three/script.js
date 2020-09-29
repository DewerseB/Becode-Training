
// 03-colors/03-change-bcg-three/script.js - 3.3: background color (3)


(() => {

    // your code here
    document.getElementById("run").addEventListener("click", () => {
        let randHexa = Math.floor(Math.random() * 16777216).toString(16); // hex number between 0 & FFFFFF
        document.documentElement.style.backgroundColor = "#" + randHexa;
    });
})();
