// 06-dom/11-change-event-input-one/script.js - 6.11: change event (1)


(() => {

    // your code here
    let pass = document.getElementById('pass-one');
    let counter = document.getElementById('counter');
    pass.addEventListener('input', passCheck);

    function passCheck(ev) {
        pass.value.length > 10 && (pass.value = pass.value.substring(0, pass.value.length -1));
        counter.innerHTML = pass.value.length + "/10";
    }
})();
