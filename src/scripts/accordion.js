class Accordion {

    constructor() {
        this.data = [];
        this.getData();
    }

    /**
     * Gets data from Mock API call
     */
    async getData() {
        try {
            const response = await fetch('http://605a21feb11aba001745da26.mockapi.io/api/v1/questions');

            if (response.status != 200) {
                var responseError = 'Something is wrong! Status Code: ' + response.status;
                //this.showError(responseError);
            }

            this.data = await response.json();
            console.log(this.data);

            if (this.data.length > 0) {
                this.showData();
            } else {
                let div = document.createElement("div");
                div.innerHTML = "The response is empty";

                document.getElementById("accordion-left").appendChild(div);
            }
        } catch (error) {

        }
    }

    /**
     * Creates the accordions
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

        document.getElementById("accordion-left").appendChild(accordionItem);
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
        this.data.forEach(item => {
            this.createAccordion(item.question, item.answer);
        });
        this.clickButton();
    }
}

const accordion = new Accordion();