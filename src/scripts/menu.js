class Menu {
    constructor() {}

    /**
     * Show and hide the list of links of the menu
     * @param {HTMLElement} links The list of links of the menu
     */
    menuDropdown(links) {
        // adds and removes the class to display or not the menu in mobile or desktop mode
        links.classList.toggle("active-menu");
    }
}

const btnBurger = document.getElementById("btn-burger");
const links = document.getElementById("myLinks");

const menu = new Menu();

btnBurger.addEventListener('click', () => {
    menu.menuDropdown(links);
})