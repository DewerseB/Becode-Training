
// 03-colors/01-change-bcg-one/script.js - 3.1: Bcg one (1)


(() => {

    // your code here
    document.getElementById("red").addEventListener("click", changeBgColor);
    document.getElementById("green").addEventListener("click", changeBgColor);
    document.getElementById("yellow").addEventListener("click", changeBgColor);
    document.getElementById("blue").addEventListener("click", changeBgColor);

    function changeBgColor(ev) {
        //document.documentElement.style.setProperty('--main-blue', ev.currentTarget.id);
        document.documentElement.style.backgroundColor = ev.currentTarget.id;
    }
    
})();
