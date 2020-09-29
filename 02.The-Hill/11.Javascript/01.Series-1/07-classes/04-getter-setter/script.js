// 07-classes/04-getter-setter/script.js - 7.4: getter & setter


(() => {
    // your code here
    class Person {
        constructor(firstname, lastname) {
            this.firstname = firstname;
            this.lastname = lastname;
        }

        get name() {
            return this.firstname + " " + this.lastname;
        }

        set name(fullname) {
            let names = fullname.split(' ');
            this.firstname = names[0];
            this.lastname = names[1];
        }
    };

    document.getElementById("run").addEventListener("click", () => {
        let person = new Person('Bastien', 'Dewerse');
        console.log(person.name);
        person.name = 'B D';
        console.log(person.name);
    });
})();
