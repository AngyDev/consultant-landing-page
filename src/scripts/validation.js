export default class Validation {

    constructor() {}

    /**
     * Check if the input is empty or null
     * @param {HTMLElement} inputField the input to validate
     * @param {HTMLElement} errorInput the error string of the input
     * @returns boolean
     */
    inputValidation(inputField, errorInput) {

        //const errorInput = document.getElementById('error-' + inputField.id);

        if (inputField.value === "" || inputField.value === null) {
            errorInput.innerHTML = "Enter your " + inputField.id;
            return false;
        }

        return true;
    }
}