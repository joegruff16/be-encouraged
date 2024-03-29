// Include light and dark mode toggle function
const toggleButton = document.querySelector('#toggle');


// Input > Dowork > Output - The input is the event
toggleButton.addEventListener('click', function (event) {
    // console.log(event);
    event.preventDefault();
    console.log(`does this work?`);
})

function lightDarkMode() {
    console.log(`how does this look?`)
    var element = document.body;
    element.classList.toggle("light-dark");
}