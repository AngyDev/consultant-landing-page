import fetch from 'cross-fetch';
import Validation from './validation';

export default class Login {

    constructor() {
        this.data = {};
    }

    /**
     * Get the user
     * @returns One user
     */
    async getUser(id, username) {
        try {
            const response = await fetch('https://605a21feb11aba001745da26.mockapi.io/api/v1/users/' + id);

            if (response.status != 200) {
                this.showMessage("The User " + username + " is not registered");
                return;
            }

            this.data = await response.json();

            this.showMessage("The Login is correct. Welcome " + username + "!!");

            return username;

        } catch (error) {
            console.log(error);
        }
    }

    /**
     * Show an alert to login message
     * @param {String} message
     */
    showMessage(message) {
        alert(message);
    }

    /**
     * Checks if the input are valid and login
     * @param {HTMLElement} nameInput The name input
     * @param {HTMLElement} password The password input
     * @param {Array} errors Array of error span
     * @returns 
     */
    checkInputAndLogin(nameInput, password, errors) {
        // validation of the input
        if (this.checkInput(nameInput.value, password.value, errors)) {
            // not display the error message
            if (errors != undefined) {
                errors.forEach(element => {
                    element.innerHTML = "";
                });
            }
            // Create a random id to have an error for user not found
            const id = Math.floor(Math.random() * 3);
            this.getUser(id, nameInput.value);

            nameInput.value = "";
            password.value = "";
        }
    }

    /**
     * Checks if the inputs are valid
     * @param {String} nameValue The name of the user
     * @param {String} passwordValue The password of the user
     * @param {Array} errors The array of errors
     * @returns 
     */
    checkInput(nameValue, passwordValue, errors) {
        const validation = new Validation();

        const validName = validation.inputValidation(nameValue, errors[0]);
        const validPassword = validation.inputValidation(passwordValue, errors[1]);

        if (validName && validPassword) {
            return true;
        }

        return false;
    }
}