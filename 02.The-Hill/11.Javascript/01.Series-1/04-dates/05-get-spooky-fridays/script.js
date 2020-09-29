
// 04-dates/05-get-spooky-fridays/script.js - 4.5: calcul des vendredi 13


(() => {

    // your code here
    document.getElementById("run").addEventListener("click", () => {
        const months = ['January','February','March','April','May','June','July','August','September','October','November','December'];
        let year = document.getElementById("year").value;
        let freekyMonth = [];
        for (let m = 0; m < 12; m++) {
            let date = new Date(year, m, 13);
            date.getDay() === 5 && freekyMonth.push(months[m]);
        }
        window.alert(freekyMonth);
    });
})();
