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

}

const nameField = document.getElementById("name");
const password = document.getElementById("password");
const signIn = document.getElementById("signIn");
const error = document.querySelectorAll('.error');
const errorName = document.getElementById("error-name");
const errorPassword = document.getElementById("error-password");

const validation = new Validation();

const login = new Login();

signIn && signIn.addEventListener('click', () => {

    const validName = validation.inputValidation(nameField, errorName);
    const validPassword = validation.inputValidation(password, errorPassword);

    if (validName && validPassword) {
        // not display the error message
        if (error != undefined) {
            error.forEach(element => {
                element.innerHTML = "";
            });
        }
        // Create a random id to have an error for user not found
        const id = Math.floor(Math.random() * 3);
        login.getUser(id, nameField.value);

        nameField.value = "";
        password.value = "";
    }
});