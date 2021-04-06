export default class Validation {

    constructor() {}

    inputValidation(inputName) {
        let valid = true;
        const errorName = document.getElementById('error__' + inputName.id);

        if (inputName.value === "" || inputName.value === null) {
            valid = false;
            errorName.innerHTML = "Enter your " + inputName.id;
        }
        return valid;
    }

}