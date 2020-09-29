// 06-dom/06-mini-carousel/script.js - 6.6: mini carousel


(() => {

    let gallery= [
        "../../_shared/img/bell.svg",
        "../../_shared/img/clock.svg",
        "../../_shared/img/compass.svg",
        "../../_shared/img/lemon.svg",
        "../../_shared/img/map.svg",
    ];

    // your code here
    let img = document.getElementsByTagName('img')[0];

    function next() {   
        let id = gallery.indexOf(img.getAttribute('src'));
        id === (gallery.length - 1) ? img.setAttribute('src', gallery[0]) : img.setAttribute('src', gallery[id+1]);
    };

    document.getElementById('next').addEventListener('click', next); 
})();
