document.getElementById("theme").addEventListener("play", startAnim);

function startAnim() {
    if ( document.getElementById("fadeId").className === "fade") {
        document.getElementById("fadeId").className += "Anim";
        document.getElementById("logoId").className += "Anim";
        document.getElementById("crawlId").className += "Anim";
    } else {
        document.getElementById("fadeId").style.webkitAnimationPlayState = "running";
        document.getElementById("logoId").style.webkitAnimationPlayState = "running";
        document.getElementById("crawlId").style.webkitAnimationPlayState = "running";
    }
};

document.getElementById("theme").addEventListener("pause", stopAnim);

function stopAnim() {
    document.getElementById("fadeId").style.webkitAnimationPlayState = "paused";
    document.getElementById("logoId").style.webkitAnimationPlayState = "paused";
    document.getElementById("crawlId").style.webkitAnimationPlayState = "paused";
}