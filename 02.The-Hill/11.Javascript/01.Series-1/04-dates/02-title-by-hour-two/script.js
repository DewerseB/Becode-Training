
// 04-dates/02-title-by-hour-two/script.js - 4.2: text according to the hour (2)


(() => {

    // to change the content of a tag: document.getElementById("element-id").innerHTML = "new-value"

    // your code here
    let date = new Date();
    let minutes = date.getHours() * 60 + date.getMinutes();
    minutes < 1050 ? document.getElementById("target").innerHTML = "Hello" : document.getElementById("target").innerHTML = "Good evening";
})();
