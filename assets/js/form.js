// We are taking the username, title, and content that is inputed to be stored in the local storage
// after the user clicks the submit button

const userNameInput = document.querySelector('#username');
const titleInput = document.querySelector('#title');
const contentInput = document.querySelector('#content');
const submitButton = document.querySelector('#submit');


// Input > Dowork > Output - The input is the event
submitButton.addEventListener('click', function (event) {
    // console.log(event);
    event.preventDefault();
    console.log(`is this working?`);


    if (userNameInput.value === '' || titleInput.value === '' || contentInput.value === '') {
        alert("Must enter a value");
    } else {

        console.log(`all data entered`);
        savePost();
    }
})

// This function saves data entered into username, title, and password into the local storage
function savePost() {
    const blogData = {
        username: userNameInput.value.trim(),
        title: titleInput.value.trim(),
        content: contentInput.value.trim()
    };
    var blogPost = JSON.parse(localStorage.getItem('blogPost')) || [];

    blogPost.push(blogData);

    localStorage.setItem('blogPost', JSON.stringify(blogPost));
    console.log('post saved into local storage');

    window.open("blog.html");
}