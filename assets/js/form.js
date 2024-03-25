// We are taking the username, title, and content that is inputed to be stored in the local storage
// after the user clicks the submit button

const userNameInput = document.querySelector('#username');
const titleInput = document.querySelector('#title');
const contentInput = document.querySelector('#content');
const messageDiv = document.querySelector('#message');
const submitButton = document.querySelector('#submit');

// Message Display after submit button is selected
function displayMessage(type, message) {
    messageDiv.textContent = message;
    messageDiv.setAttribute('class', type);
}

// Input > Dowork > Output - The input is the event
submitButton.addEventListener('click', function (event) {
    // console.log(event);
    event.preventDefault();

    const userNameInput = userNameInput.value;
    const titleInput = titleInput.value;
    const contentInput = contentInput.value;

    if (username === '') {
        displayMessage('error', 'Username cannot be blank');
    } else if (title === '') {
        displayMessage('error', 'Title cannot be blank');
    } else if (content === '') {
        displayMessage('error', 'Content cannot be blank');
    } else {
        displayMessage('success', 'Logged in successfully');

        localStorage.setItem('email', email);
        localStorage.setItem('password', password);
        renderLastRegistered();
    }
})