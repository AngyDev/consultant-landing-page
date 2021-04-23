import Login from './login';

const nameField = document.getElementById("name");
const password = document.getElementById("password");
const signIn = document.getElementById("signIn");
const error = document.querySelectorAll('.error');

const login = new Login();

signIn && signIn.addEventListener('click', () => {
    login.checkInputAndLogin(nameField.value, password.value, error);

    nameField.value = "";
    password.value = "";

});