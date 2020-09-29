// 09-misc/05-worst-ui-three/script.js - 9.5: worst user interface (3) : phone slot

(() => {

    // your code here
    let one = document.getElementById('part-one');
    let two = document.getElementById('part-two');
    let three = document.getElementById('part-three');
    let four = document.getElementById('part-four');
    let target = document.getElementById('target');

    function randNb(ev) {
        let id = ev.currentTarget.id.replace('fix-', '');
        let box = document.getElementById(id);
        let rand = parseInt(box.getAttribute('data-min'), 10) + Math.floor(Math.random() * (box.getAttribute('data-max')-box.getAttribute('data-min')));
        rand < 10 ? box.value = "0" + rand : box.value = rand;
        target.innerHTML = "0" + one.value + two.value + three.value + four.value;
    }

    document.getElementById('fix-part-one').addEventListener('click', randNb);
    document.getElementById('fix-part-two').addEventListener('click', randNb);
    document.getElementById('fix-part-three').addEventListener('click', randNb);
    document.getElementById('fix-part-four').addEventListener('click', randNb);
})();
