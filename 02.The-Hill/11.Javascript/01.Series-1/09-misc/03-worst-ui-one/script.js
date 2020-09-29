// 09-misc/03-worst-ui-one/script.js - 9.3: worst user interface (1) : phone slider


(() => {

    // your code here
    let slider = document.getElementById('slider');
    let target = document.getElementById('target');
    slider.addEventListener('input', () => {target.innerHTML = "0" + slider.value;});
})();
