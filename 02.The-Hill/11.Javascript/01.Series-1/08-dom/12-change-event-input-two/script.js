// 06-dom/12-change-event-input-two/script.js - 6.12: change event (2)


(() => {

    // your code here
    let pass = document.getElementById('pass-one');
    let validity = document.getElementById('validity');
    pass.addEventListener('input', passCheck);

    function passCheck(ev) {
        (pass.value.length >= 8 && pass.value.replace(/[^0-9]/g,"").length >= 2) ? 
            validity.innerHTML = 'Ok' : validity.innerHTML = 'Not ok';
    }
})();
