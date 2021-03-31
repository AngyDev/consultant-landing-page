const accordionButton = document.getElementsByClassName("accordion__btn");

for (var i = 0; i < accordionButton.length; i++) {
    accordionButton[i].addEventListener("click", function() {
        this.classList.toggle("active");

        /* Toggle between hiding and showing the active panel */
        var panel = this.nextElementSibling;
        if (panel.style.display === "block") {
            panel.style.display = "none";
        } else {
            panel.style.display = "block";
        }
    });
}

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
                //this.showData();
            } else {
                let div = document.createElement("div");
                div.innerHTML = "The response is empty";

                document.getElementById("accordion-left").appendChild(div);
            }
        } catch (error) {

        }
    }

    /**
     * Creates the accorsions
     */
    createAccordion(buttonText) {
        /*<div class="accordion__item">
            <button class="accordion__btn">What is a professional traffic permit?</button>
            <div class="accordion__panel">
                <p>Traffic permits are a requirement for conducting professional traffic</p>
            </div>
        </div>*/

        const accordionItem = document.createElement("div");
        accordionItem.setAttribute("class", "accordion__item");
        const accordionButton = document.createElement("button");
        accordionButton.setAttribute("class", "accordion__btn");
        accordionButton.innerHTML = buttonText;

    }

    /**
     * Shows the accordions
     */
    showData() {
        this.data.forEach(item => {});
    }
}
console.log("Before new Accordion");
const accordion = new Accordion();
console.log("After new Accordion");