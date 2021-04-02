class Accordion {

    constructor() {
        this.data = [];
        this.getData(1);
    }

    /**
     * Gets data from Mock API call
     * @param {Number} page The number of the page to call
     */
    async getData(page) {
        try {
            const response = await fetch('https://605a21feb11aba001745da26.mockapi.io/api/v1/questions?page=' + page + '&limit=13');

            if (response.status != 200) {
                var responseError = 'Something is wrong! Status Code: ' + response.status;
                //this.showError(responseError);
            }

            this.data = await response.json();

            if (this.data.length > 0) {
                this.showData();
            } else {
                let div = document.createElement("div");
                div.innerHTML = "The response is empty";

                document.getElementById("accordion-left").appendChild(div);
            }

        } catch (error) {
            console.log(error);
        }
    }

    /**
     * Creates the accordions
     * @param {String} buttonText 
     * @param {String} panelText 
     * @returns accordion html element
     */
    createAccordion(buttonText, panelText) {

        const accordionItem = document.createElement("div");
        accordionItem.setAttribute("name", "acc-item");
        accordionItem.setAttribute("class", "accordion__item");

        const accordionButton = document.createElement("button");
        accordionButton.setAttribute("class", "accordion__btn");
        accordionButton.setAttribute("name", "acc-btn");
        accordionButton.innerHTML = buttonText;
        accordionItem.appendChild(accordionButton);

        const accordionPanel = document.createElement("div");
        accordionPanel.setAttribute("class", "accordion__panel");

        const panelPText = document.createElement("p");
        panelPText.innerHTML = panelText;

        accordionPanel.appendChild(panelPText);
        accordionItem.appendChild(accordionPanel);

        return accordionItem;
    }

    /**
     * After the creation of the accordion define what happens when the button is pressed
     */
    clickButton() {
        const accordionBtn = document.getElementsByName("acc-btn");

        accordionBtn.forEach(button => {
            button.addEventListener('click', (e) => {
                e.target.classList.toggle("active");

                var panel = e.target.nextElementSibling;
                if (panel.style.display === "block") {
                    panel.style.display = "none";
                } else {
                    panel.style.display = "block";
                }
            })
        })
    }


    /**
     * Shows the accordions
     */
    showData() {
        this.data.forEach((item, index) => {
            const accordionBox = this.createAccordion(item.question, item.answer);

            if (index <= 7) {
                document.getElementById("accordion-left").appendChild(accordionBox);
            } else {
                document.getElementById("accordion-right").appendChild(accordionBox);
            }
        });

        this.clickButton();
    }

    /**
     * Reset the Accordion Item to set new data
     */
    reset() {
        const accLeft = document.getElementById("accordion-left");
        accLeft.innerHTML = "";
        const accRight = document.getElementById("accordion-right");
        accRight.innerHTML = "";
    }
}

const accordion = new Accordion();

const loadMoreBtn = document.getElementById("loadMoreBtn");
const loadLessBtn = document.getElementById("loadLessBtn");

loadMoreBtn.addEventListener('click', () => {
    accordion.reset();
    accordion.getData(2);

    loadLessBtn.style.display = "unset";
    loadMoreBtn.style.display = "none";
});

loadLessBtn.addEventListener('click', () => {
    accordion.reset();
    accordion.getData(1);

    loadLessBtn.style.display = "none";
    loadMoreBtn.style.display = "unset";
});