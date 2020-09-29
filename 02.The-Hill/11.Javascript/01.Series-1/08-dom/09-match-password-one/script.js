// 06-dom/09-match-password-one/script.js - 6.9: password verification (1)


(() => {

    // your code here
    document.getElementById('run').addEventListener('click', testPass);

    function testPass() {
        let pass1 = document.getElementById('pass-one');
        let pass2 = document.getElementById('pass-two');
        pass1.value !== pass2.value ? 
            (pass1.style.borderColor = 'red', pass2.style.borderColor = 'red') :
            (pass1.style.borderColor = 'green', pass2.style.borderColor = 'green');
    }
})();
