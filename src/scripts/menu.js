class Menu {
    constructor() {}

    /**
     * Show and hide the list of links of the menu
     * @param {HTMLElement} links The list of links of the menu
     * @param {HTMLElement} btnContact The menu button
     */
    menuDropdown(links, btnContact) {
        // Change the content of the li element
        btnContact.innerHTML = "<a>Contact</a>";

        if (links.style.display === "block") {
            links.style.display = "none";
        } else {
            links.style.display = "block";
        }
    }
}

const btnBurger = document.getElementById("btn-burger");
const btnContact = document.getElementById("btn-contact");
const links = document.getElementById("myLinks");

const menu = new Menu();

btnBurger.addEventListener('click', () => {
    menu.menuDropdown(links, btnContact);
})