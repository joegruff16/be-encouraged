// We are taking the username, title, and content that is inputed to be stored in the local storage
// after the user clicks the submit button

const userNameInput = document.querySelector('#uname');
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
    console.log(event)
    event.preventDefault();
})