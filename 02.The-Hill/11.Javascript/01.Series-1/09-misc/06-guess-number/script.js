// 09-misc/06-guess-number/script.js - 9.6: guess the number

(() => {

    // your code here
    function guessNb() {
        let x = Math.floor((Math.random() * 100) + 1);
        let count = 0;
        let y;

        do {
            y = parseInt(window.prompt("Guess a number between 1 and 100."), 10);
            count++;
            if (x < y) {
                window.alert("Lower")
            } else if (x > y) {
                window.alert("Higher")
            } else {
                window.alert("That's it!\nYou needed " + count + " guess(es).")
            }
        } while (x !== y);
    }

    guessNb();
})();
