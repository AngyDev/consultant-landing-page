export default class Validation {

    constructor() {}

    /**
     * Check if the input is empty or null
     * @param {HTMLElement} inputField the input to validate
     * @param {HTMLElement} errorInput the error string of the input
     * @returns boolean
     */
    inputValidation(inputField, errorInput) {
        let valid = true;
        //const errorInput = document.getElementById('error-' + inputField.id);

        if (inputField.value === "" || inputField.value === null) {
            valid = false;
            errorInput.innerHTML = "Enter your " + inputField.id;
        }

        return valid;
    }
}