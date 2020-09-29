// 09-misc/04-worst-ui-two/script.js - 9.4: worst user interface (2) : phone clicker


(() => {

    // your code here
    let one = document.getElementById('part-one');
    let two = document.getElementById('part-two');
    let three = document.getElementById('part-three');
    let four = document.getElementById('part-four');
    let target = document.getElementById('target');

    function increment(ev) {
        let val = ev.currentTarget.innerHTML;
        val === ev.currentTarget.getAttribute('data-max') ? val = ev.currentTarget.getAttribute('data-min') : val++;
        val < 10 ? ev.currentTarget.innerHTML = "0" + val : ev.currentTarget.innerHTML = val;
        target.innerHTML = "0" + one.innerHTML + two.innerHTML + three.innerHTML + four.innerHTML;
    }

    one.addEventListener('click', increment);
    two.addEventListener('click', increment);
    three.addEventListener('click', increment);
    four.addEventListener('click', increment);
})();
