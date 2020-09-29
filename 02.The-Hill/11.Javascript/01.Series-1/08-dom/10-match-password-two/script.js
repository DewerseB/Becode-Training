// 06-dom/10-match-password-two/script.js - 6.10: password verification (2)


(() => {

    // your code here
    document.getElementById('run').addEventListener('click', testPass);

    function testPass() {
        let pass1 = document.getElementById('pass-one');
        let pass2 = document.getElementById('pass-two');
        pass1.value !== pass2.value ? (pass1.classList.add('error'), pass2.classList.add('error');
    }
})();
