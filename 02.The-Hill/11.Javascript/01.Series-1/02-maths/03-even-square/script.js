
// 02-maths/03-even-square/script.js - 2.3: squares and pairs


(() => {

    document.getElementById("run").addEventListener("click", () => {

        // your code here
        let sqNbs = [];
        let n;
        for (let i=1; i <= Math.sqrt(21); i++) {
            n = Math.pow((i - 1), 2) + (i - 1) + i;
            sqNbs.push(n);
        }
        window.alert(sqNbs);
    });

})();
