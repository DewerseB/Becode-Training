// 06-objects/01-generate-object/script.js - 6.1: genererate an object


(() => {
    // your code here
    const myself = {
        lastname : "Dewerse",
        firstname : "Bastien",
        age : "33",
        city : "Charleroi",
        country : "Belgium"
    };

    document.getElementById('run').addEventListener('click', () => {
        console.log("Hello, my name is " + myself.firstname + " " + myself.lastname +".\nI\'m " + myself.age + " years old and I live in " + myself.city + ", " + myself.country + ".");
    });
})();
