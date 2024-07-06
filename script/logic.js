// function writeToLocalStorage(name, data){
//     localStorage.setItem(name, JSON.stringify(data))
// }

// function readFromLocalStorage(name){
//     return JSON.parse.
// }
/*update the button element to change the innerHTML and class*/
const buttonToggle = document.getElementById("modeToggle");
buttonToggle.addEventListener("click", function(switcher) {
switcher.preventDefault();
    let currentMode = document.getElementById("modeToggle");
    if (currentMode.innerHTML === "Light mode ☀️") {
        currentMode.innerHTML = "Dark mode 🌙";
        currentMode.classList.replace("toggleLight", "toggleDark");
    } else if (currentMode.innerHTML === "Dark mode 🌙") {
        currentMode.innerHTML = "Light mode ☀️";
        currentMode.classList.replace("toggleDark", "toggleLight");
    }
})