// variables
var navBar = document.getElementsByTagName("nav")[0];
var hamburgerMenuButton = document.getElementsByClassName("menu-icon")[0];

// navbar aperta o chiusa 
function openMenu() {
    if(navBar.className == "opened") {
        navBar.className = "closed";
    } else {
        navBar.className = "opened";
    }
}

hamburgerMenuButton.addEventListener("click", openMenu);