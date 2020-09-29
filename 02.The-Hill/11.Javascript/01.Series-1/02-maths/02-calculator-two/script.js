
// 02-maths/02-calculator-two/script.js - 2.2: calculatrice (2)

(() => {
    // to get the value of an input: document.getElementById("element-id").value

    const performOperation = operation => {
        // perform the operation
        let total;
        let valOne = parseFloat(document.getElementById('op-one').value);
        Number.isNaN(valOne) && (valOne = 0);
        let valTwo = parseFloat(document.getElementById('op-two').value);
        Number.isNaN(valTwo) && (valTwo = 0);
        switch (operation) {
            case "addition" :
                total = valOne + valTwo;
                window.alert(valOne + " + " + valTwo + " = " + total);
                break;
            case "substraction" :
                total = valOne - valTwo;
                window.alert(valOne + " + " + valTwo + " = " + total);
                break;
            case "multiplication" :
                total = valOne * valTwo;
                window.alert(valOne + " + " + valTwo + " = " + total);
                break;
            case "division" :
                valTwo !== 0 ? total = valOne / valTwo : window.alert("The divider must different than 0.");
                valTwo !== 0 && window.alert(valOne + " + " + valTwo + " = " + total);
                break;                          
        }
    };

    Array.from(document.querySelectorAll("button.operator")).forEach($btn =>
        $btn.addEventListener(
            "click",
            () => (performOperation($btn.id), false),
        ),
    );
})();
