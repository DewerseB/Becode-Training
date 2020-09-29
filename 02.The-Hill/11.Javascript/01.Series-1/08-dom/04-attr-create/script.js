// 06-dom/04-attr-create/script.js - 6.4: manipulating attributes and creating elements


(() => {

    // your code here
    let src = document.getElementById('source').getAttribute('data-image');
    let img = document.createElement('img');
    img.setAttribute('src', src);
    document.getElementById('target').appendChild(img);
    document.getElementById('source').remove();
})();
