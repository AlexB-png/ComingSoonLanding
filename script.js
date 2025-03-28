
const emailInput = document.getElementById('emailInput');
const notifyButton = document.getElementById('notifyButton');
const errorMessage = document.getElementById('error-message');

function isInputTypeSupported(type) {
    const input = document.createElement('input');
    input.setAttribute('type', type);

    const invalidValue = 'not-a-date';
    input.setAttribute('value', invalidValue);

    return input.value !== invalidValue;
}

function isValidEmail(email) {
    if (isInputTypeSupported('email')) {
        const inputElement = document.createElement('input');
        inputElement.type = 'email';
        inputElement.value = email;

        return inputElement.checkValidity();
    }

    const parts = email.split('@');

    if (parts.length !== 2) {
        return false;
    }

    if (parts[0].trim().length === 0 || parts[1].trim().length === 0) {
        return false;
    }

    return true;
}

notifyButton.addEventListener('click', function () {
    const emailValue = emailInput.value;

    emailInput.style.borderColor = ''; 
    errorMessage.style.visibility = 'hidden';

    // Check if the email is valid
    if (isValidEmail(emailValue)) {
        console.log("Valid Email: " + emailValue);
        emailInput.value = '';  
        emailInput.style.borderColor = 'green';
    } else {
        console.log("Invalid Email: " + emailValue);
        emailInput.style.borderColor = 'red';  
        errorMessage.style.visibility = 'visible';  
    }
});
