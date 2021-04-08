const btnBurger = document.getElementById("btn-burger");

btnBurger.addEventListener('click', () => {
    // Change the content of the li element
    const btnContact = document.getElementById("btn-contact");
    btnContact.innerHTML = "<a>Contact</a>";

    const links = document.getElementById("myLinks");

    if (links.style.display === "block") {
        links.style.display = "none";
    } else {
        links.style.display = "block";
    }
})