// We are taking the username, title, and content that is inputed to be stored in the local storage
// after the user clicks the submit button

const userNameInput = document.querySelector('#username');
const titleInput = document.querySelector('#title');
const contentInput = document.querySelector('#content');
const submitButton = document.querySelector('#submit');


// Message Display after submit button is selected


// Input > Dowork > Output - The input is the event
submitButton.addEventListener('click', function (event) {
    // console.log(event);
    event.preventDefault();
    console.log(`is this working?`);


    if (userNameInput.value === "" || titleInput.value === "" || contentInput.value === "") {
        alert('error', 'Username cannot be blank');
    } else {
        console.log(`all data entered`);
        savePost();
    }
})

function savePost() {
    const blogData = {
        username: userNameInput.value.trim(),
        title: titleInput.value.trim(),
        content: contentInput.value.trim()
    };
    var blogPost = JSON.parse(localStorage.getItem('blogPost'));
    if (blogPost === null) {
        blogPost = [];
    } else {
        blogPost.push(blogData);
    }
}

localStorage.setItem('blogPost', JSON.stringify(blogPost))
console.log('post saved into local storage');

window.location.href = 'blog.html';