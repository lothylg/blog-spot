//global scope
const cardContainer = document.getElementById("card");
const againBtn = document.getElementById("again");

let existingArticles = localStorage.getItem('articles');

start();
//functions
// console.log(existingArticles)
 function start(){
    // const existingArticles = localStorage.getItem('articles');
        if(existingArticles ){
            articles = JSON.parse(existingArticles);
            populateArticles();
        } 
        // cardContainer.innerHTML = "nothing new yet!"
    }

function populateArticles(){
    cardContainer.innerHTML = "";
    for ( let i = 0; i < articles.length; i++){
        const h2Title = document.createElement("h2");
        h2Title.textContent = articles[i].title;

        const pAuthor = document.createElement("p");
        pAuthor.textContent = articles[i].author;

        const pContent = document.createElement("p");
        pContent.textContent = articles[i].content;

        cardContainer.appendChild(h2Title);
        cardContainer.appendChild(pAuthor);
        cardContainer.appendChild(pContent);
    }
}

function updateLocalStorage(){
    localStorage.setItem("articles", JSON.stringify(articles))
}


//back button
const blogForm = document.getElementById("again");
blogForm.addEventListener("click", function(event) {
    updateLocalStorage();
    // event.preventDefault();
    window.location.href = './index.html';
})