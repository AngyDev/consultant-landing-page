import Validation from './validation';

class Form {
    constructor() {
        this.data = {};
    }

    /**
     * Get the user
     * @returns One user
     */
    async getUser() {
        try {
            // Create a random id to have an error for user not found
            const id = Math.floor(Math.random() * 3);

            const response = await fetch('https://605a21feb11aba001745da26.mockapi.io/api/v1/users/' + id);

            if (response.status != 200) {
                var responseError = 'The User is not registered';
                this.showMessage(responseError);
                return;
            }

            this.data = await response.json();

            this.showMessage("The Login is correct");

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

const validation = new Validation();

const form = new Form();

signIn.addEventListener('click', () => {

    const validName = validation.inputValidation(nameField);
    const validPassword = validation.inputValidation(password);

    if (validName && validPassword) {
        // not display the error message
        if (error != undefined) {
            error.forEach(element => {
                element.innerHTML = "";
            })
        }
        form.getUser();
        nameField.value = "";
        password.value = "";
    }

});