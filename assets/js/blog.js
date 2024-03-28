// Include function back button



// Function that retrieves data from local storage
const backButton = document.querySelector('#back')
const blogEl = document.querySelector(".blogPosts")
function displayBlogs(event) {
    event.preventDefault();

    const blogs = JSON.parse(localStorage.getItem("blogPost")) || [];
    console.log(blogs)
    let blogTable = "";
    for (var i = 0; i < blogs.length; i++) {
        blogTable += `
        <table class="table">
            <tr>
                <th>
                    ${blogs[i].title}
                </th>
            </tr>
            <tr>
                <td>
                    ${blogs[i].content}
                </td>
            </tr>
            <tr>
                <td>
                    posted by: ${blogs[i].username}
                </td>
                <br>
            </tr>
        </table>
        `;
        blogEl.innerHTML = blogTable;
    }
    backButton.addEventListener('click', function (event) {
        // console.log(event);
        event.preventDefault();
        console.log(`is this working?`);
        window.open("index.html");
    })

}


document.addEventListener("DOMContentLoaded", displayBlogs)

