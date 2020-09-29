
// 01-base/04-asv-confirm/script.js - 1.4: ASV avec confirmation

(() => {
    // Don't bother with that, look at your browser's console(chrome), you can delete it afterwards ;)
    console.log('%c ', 'padding: 38px; background:url(https://becode.org/app/uploads/2020/03/bc_mailsign_seal.png) no-repeat;');
    console.log('Hello Woods programmer');

    // YOUR CODE HERE
    let confirm = false;
    let age;
    let gender;
    let town;
    while (!confirm) {
        age = window.prompt("What\'s your age?");
        gender = window.prompt("What\'s your gender?");
        town = window.prompt("Where do you live?");
        window.prompt("You're " + age + " old.\nYou're a " + gender + ".\nAnd you live in " + town + ".\nIs that correct?") === "yes" && (confirm = true);
    }
})();
