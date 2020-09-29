// 06-dom/08-generate-table-two/script.js - 6.8: creating a table (2)

(() => {

    // your code here
    let target = document.getElementById('target');
    let table = document.createElement('table');
    target.appendChild(table);
    for (let i = 1; i <= 10; i++) {
        let tr = document.createElement('tr');
        target.children[0].appendChild(tr);
        for (let j = 1; j <= 10; j++) {
            let td = document.createElement('td');
            td.innerHTML = i*j;
            tr.appendChild(td);
        }
    }
})();
