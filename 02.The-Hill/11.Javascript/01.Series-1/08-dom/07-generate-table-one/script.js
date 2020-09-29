// 06-dom/07-generate-table-one/script.js - 6.7: creating a table (1)


(() => {

    // your code here
    let target = document.getElementById('target');
    let table = document.createElement('table');
    let tr = document.createElement('tr');
    target.appendChild(table);
    for (let i = 0; i < 10; i++) {
        target.children[0].appendChild(tr.cloneNode());
    }
})();
