// Include light and dark mode toggle function
const toggleButton = document.querySelector('#submit');


// Input > Dowork > Output - The input is the event
toggleButton.addEventListener('click', function (event) {
    // console.log(event);
    event.preventDefault();
    console.log(`does this work?`);
})

function lightDarkMode() {
    var element = document.body;
    element.classList.toggle("light-dark");
}