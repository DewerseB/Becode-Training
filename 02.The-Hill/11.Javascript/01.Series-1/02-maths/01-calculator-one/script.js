
// 02-maths/01-calculator-one/script.js - 2.1: calculator1

(() => {
    // to get the value of an input: document.getElementById("element-id").value
    let valOne;
    let valTwo;
    let total;

    document.getElementById("addition").addEventListener("click", function() {
        // perform an addition
        valOne = parseFloat(document.getElementById('op-one').value);
        Number.isNaN(valOne) && (valOne = 0);
        valTwo = parseFloat(document.getElementById('op-two').value);
        Number.isNaN(valTwo) && (valTwo = 0);
        total = valOne + valTwo;
        window.alert(valOne + " + " + valTwo + " = " + total);
    });

    document.getElementById("substraction").addEventListener("click", function() {
        // perform an substraction
        valOne = parseFloat(document.getElementById('op-one').value);
        Number.isNaN(valOne) && (valOne = 0);
        valTwo = parseFloat(document.getElementById('op-two').value);
        Number.isNaN(valTwo) && (valTwo = 0);
        total = valOne - valTwo;
        window.alert(valOne + " + " + valTwo + " = " + total);
    });

    document.getElementById("multiplication").addEventListener("click", function() {
        // perform an multiplication
        valOne = parseFloat(document.getElementById('op-one').value);
        Number.isNaN(valOne) && (valOne = 0);
        valTwo = parseFloat(document.getElementById('op-two').value);
        Number.isNaN(valTwo) && (valTwo = 0);
        total = valOne * valTwo;
        window.alert(valOne + " + " + valTwo + " = " + total);
    });

    document.getElementById("division").addEventListener("click", function() {
        // perform an division
        valOne = parseFloat(document.getElementById('op-one').value);
        Number.isNaN(valOne) && (valOne = 0);
        valTwo = parseFloat(document.getElementById('op-two').value);
        Number.isNaN(valTwo) && (valTwo = 0);
        valTwo !== 0 ? total = valOne / valTwo : window.alert("The divider must different than 0.");
        valTwo !== 0 && window.alert(valOne + " + " + valTwo + " = " + total);
    });
})();
