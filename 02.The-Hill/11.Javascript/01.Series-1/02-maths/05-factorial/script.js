
// 02-maths/05-factorial/script.js - 2.5: Factorial

function factorial(nb) {
    return (nb <= 1) ? 1 : nb * factorial(nb - 1);
}

(() => {
    
    // to get the value of an input: document.getElementById("element-id").value

    document.getElementById("run").addEventListener("click", () => {

        // your code here
        let nb = document.getElementById("number").value;
        window.alert(factorial(nb));
    });

})();

