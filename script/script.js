/*global scope*/
const titleField = document.getElementById("title");
const authorField = document.getElementById("author");
const contentField = document.getElementById("content");
// const addKey = localStorage.setItem('articles',"");
const submitBtn = document.getElementById('submitBtn');
let articles = JSON.parse(localStorage.getItem('articles'));

//circle
const canvas = document.getElementById("gradient");
const ctx = canvas.getContext("2d");
ctx.beginPath();
ctx.arc(250, 250, 200, 0, 2 * Math.PI);
ctx.fillStyle = "orange";
ctx.fill();
ctx.font = "50px Tahoma";
ctx.fillStyle = "white";
ctx.fillText("my first blog!", 100, 270);
ctx.lineWidth = 4;
ctx.createRadialGradient(150,75,15,150,75,150);

//submit button - take new article and put into current array
submitBtn.addEventListener("click", validateForm)

function parseForm() {
    event.preventDefault();
    const articlesObj = {
        title: titleField.value,
        author: authorField.value,
        content: contentField.value
    }
    articles.push(articlesObj)
    console.log(articles)
    localStorage.setItem("articles", JSON.stringify(articles));
    window.location.href = './blog.html';
}

function validateForm(event){
    if (titleField.value == "" || authorField.value == "" || contentField.value == ""){
        alert("All three fields must be filled out!")
        return
    } 
    parseForm()
}