//global scope
//there was a repeated global variable deleted and updated
const cardContainer = document.querySelector("#card");
const backBtn = document.querySelector("#again");

// Initialize existingArticles as an array or an empty array if localStorage value is null
let existingArticles = JSON.parse(localStorage.getItem('articles')) || [];

// Functions
function start() {
    //changed this so it's not just if there is anything at all, just so that it's greater than 0
    if (existingArticles.length > 0) {
        populateArticles();
    } else {
        //actually create an element that will print
        const message = document.createElement("p");
        message.textContent = "Nothing new yet!";
        cardContainer.appendChild(message);
    }
}

//make cards for the individual blog posts
function populateArticles() {
    cardContainer.innerHTML = "";
    for (let i = 0; i < existingArticles.length; i++) {
        const h2Title = document.createElement("h2");
        h2Title.textContent = existingArticles[i].title;

        const pAuthor = document.createElement("p");
        pAuthor.textContent = existingArticles[i].author;

        const pContent = document.createElement("p");
        pContent.textContent = existingArticles[i].content;

        cardContainer.appendChild(h2Title);
        cardContainer.appendChild(pAuthor);
        cardContainer.appendChild(pContent);
    }
}

function updateLocalStorage() {
    localStorage.setItem("articles", JSON.stringify(existingArticles));
}

// Back button
//udpated the variable so that it's more clear. 
backBtn.addEventListener("click", function(event) {
    updateLocalStorage();
    // event.preventDefault();
    window.location.href = './index.html';
});

// Start up the application
start();