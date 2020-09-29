// 09-misc/07-storage-clicker/script.js - 9.7: storage clicker


(() => {

    // your code here
    let btn = document.getElementById('increment');
    let target = document.getElementById('target');
    localStorage.getItem('counter') === null && localStorage.setItem('counter', 0);
    target.innerHTML = localStorage.getItem('counter');

    function incLocal() {
        let x = parseInt(localStorage.getItem('counter'), 10) + 1;
        localStorage.setItem('counter', x);
        target.innerHTML = x;
    }

    btn.addEventListener('click', incLocal);
})();