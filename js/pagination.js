// functions
function hideAll() {
    let entry = document.getElementById("preload");
    let mainMenu = document.getElementById("main-menu");

    entry.style.display = "none";
    mainMenu.style.display = "none";
}

function gotoMainMenuFirstTime() {
    let mainMenu = document.getElementById("main-menu");
    let audio = document.getElementById("curves");

    hideAll();
    mainMenu.style.display = "block";
    audio.play();
}