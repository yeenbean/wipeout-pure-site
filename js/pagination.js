// functions
function hideAll() {
    let entry = document.getElementById("entry");
    let mainMenu = document.getElementById("main-menu");

    entry.style.visibility = "hidden";
    mainMenu.style.visibility = "hidden";
}

function gotoMainMenuFirstTime() {
    let mainMenu = document.getElementById("main-menu");
    let audio = document.getElementById("curves");

    hideAll();
    mainMenu.style.visibility = "visible";
    audio.play();
}