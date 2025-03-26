// Get references to the input box and the button
const emailInput = document.getElementById('emailInput');
const notifyButton = document.getElementById('notifyButton');
const errorMessage = document.getElementById('error-message');

// Function to check if a particular input type is supported
function isInputTypeSupported(type) {
    const input = document.createElement('input');
    input.setAttribute('type', type);

    const invalidValue = 'not-a-date';
    input.setAttribute('value', invalidValue);

    return input.value !== invalidValue;
}

// Function to check if the email is valid
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
    // Get the value of the input box
    const emailValue = emailInput.value;

    // Reset any previous error state
    emailInput.style.borderColor = '';  // Reset border color
    errorMessage.style.visibility = 'hidden'; // Hide the error message

    // Check if the email is valid
    if (isValidEmail(emailValue)) {
        console.log("Valid Email: " + emailValue);
        // Optionally, you can clear the input after reading it
        emailInput.value = '';  // This clears the input box after the button is clicked
        emailInput.style.borderColor = 'green';
    } else {
        console.log("Invalid Email: " + emailValue);
        emailInput.style.borderColor = 'red';  // Change the border to red
        errorMessage.style.visibility = 'visible';  // Show the error message
    }
});
