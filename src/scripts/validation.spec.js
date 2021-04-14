import Validation from './validation';

describe("Validation of input form", () => {
    it("Input is not valid", () => {

        document.body.innerHTML = `
            <input id="name" class="form__input" type="text" placeholder="Your Name" value="">
            <span id="error-name" class="form__font error"></span>`;

        const validation = new Validation();

        const nameField = document.getElementById("name");
        const errorName = document.getElementById("error-name");
        const valid = validation.inputValidation(nameField.value, errorName);

        expect(valid).toBeFalsy();
    });

    it("Input is valid", () => {

        document.body.innerHTML = `
            <input id="name" class="form__input" type="text" placeholder="Your Name" value="">
            <span id="error-name" class="form__font error"></span>`;

        const validation = new Validation();

        const nameField = document.getElementById("name");
        nameField.value = "Angela";
        const errorName = document.getElementById("error-name");
        const valid = validation.inputValidation(nameField.value, errorName);

        expect(valid).toBeTruthy();
    })
})