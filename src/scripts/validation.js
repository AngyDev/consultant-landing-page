export default class Validation {

    constructor() {}

    /**
     * Check if the input is empty or null
     * @param {value} inputValue the value of the input
     * @param {HTMLElement} errorInput the error string of the input
     * @returns boolean
     */
    inputValidation(inputValue, errorInput) {

        if (inputValue === "" || inputValue === null) {
            errorInput.innerHTML = "The field is required";
            return false;
        }

        return true;
    }
}