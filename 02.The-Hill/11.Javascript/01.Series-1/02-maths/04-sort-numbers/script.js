// 02-maths/04-sort-numbers/script.js - 2.4: Sorting the numbers

(() => {

    // to get the value of an input: document.getElementById("element-id").value

    document.getElementById("run").addEventListener("click", () => {

        // your code here
        let nbArray = document.getElementById("numbers").value.split(", ");
        window.alert(nbArray + "\n" + nbArray.sort((a,b) => a-b));
    });

})();
