
// 04-dates/03-age-by-select/script.js - 4.3: calculate the age


(() => {

    // your code here
    document.getElementById("run").addEventListener("click", () => {
        let dob = new Date("\'" + document.getElementById("dob-month").value + " " + document.getElementById("dob-day").value + " " + document.getElementById("dob-year").value + "\'");
        let today = new Date();
        let yearDif = (today.getFullYear() - dob.getFullYear());
        let monthDif = (today.getMonth() - dob.getMonth());
        let dayDif = (today.getDate() - dob.getDate());
        if (monthDif > 0 || (monthDif === 0 && dayDif > 0)) {
            window.alert(yearDif);
        } else if (monthDif < 0 || (monthDif === 0 && dayDif < 0)) {
            window.alert(yearDif - 1);
        } else {
            window.alert(yearDif + "\nHappy Birthday!");
        }
    });
})();
