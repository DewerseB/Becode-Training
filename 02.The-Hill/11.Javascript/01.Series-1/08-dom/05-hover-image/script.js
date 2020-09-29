// 06-dom/05-hover-image/script.js - 6.5: image hover


(() => {

    // your code here
    let img = document.getElementsByTagName('img')[0];
    let nohover = img.getAttribute('src');
    let hover = img.getAttribute('data-hover');
    img.addEventListener('mouseenter', () => img.setAttribute('src', hover));
    img.addEventListener('mouseleave', () => img.setAttribute('src', nohover));
})();
