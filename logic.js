
let menuOpenBtn = document.querySelector("#menuOpenBtn");
let menuCloseBtn = document.querySelector("#menuCloseBtn")

let menuLinks = document.querySelector(".menu-link");

let screenWidth = window.innerWidth;

if (screenWidth >= 375 && screenWidth <= 940) {

    
    menuOpenBtn.addEventListener("click", () => {
        menuLinks.classList.add("showMenu-link");
        menuOpenBtn.classList.replace("menu-open-btn", "menu-open-btn2");
        menuCloseBtn.classList.replace("menu-close-btn", "menu-close-btn2");
    })

    menuCloseBtn.addEventListener("click", () => {
        menuLinks.classList.remove("showMenu-link");
        menuOpenBtn.classList.replace("menu-open-btn2", "menu-open-btn");
        menuCloseBtn.classList.replace("menu-close-btn2", "menu-close-btn");
    })
}
