// 07-classes/03-inheritance/script.js - 7.3: inheritance


(() => {
    class Animal {
        constructor(name) {
            this.name = name;
        }
        sayHello() {
            return `${this.constructor.greeting}! I'm ${this.name}!`;
        }
    };
    // your code here
    class Cat extends Animal {
        static greeting = "Miaou";
    };

    class Dog extends Animal {
        static greeting = "Woof";
    };

    document.getElementById("run").addEventListener("click", () => {
        let cat = new Cat('Kitty');
        let dog = new Dog('Spike');
        console.log(cat.sayHello());
        console.log(dog.sayHello());
    });
})();
