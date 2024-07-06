
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
ctx.strokeStyle = "white";
ctx.stroke();
ctx.createRadialGradient(150,75,15,150,75,150);

const blogForm = document.querySelector("form");
blogForm.addEventListener("submit", function(event) {
event.preventDefault();
window.location.href = './blog.html';
})




