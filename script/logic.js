//global variables



// let articles = [];

/*update the button element to change the innerHTML and class*/
const buttonToggle = document.getElementById("modeToggle");
const modeSwitcher = document.getElementById("fullPage");
buttonToggle.addEventListener("click", function(switcher) {
// switcher.preventDefault();
    let currentMode = document.getElementById("modeToggle");
    if (currentMode.innerHTML === "Light mode ☀️") {
        currentMode.innerHTML = "Dark mode 🌙";
        localStorage.setItem("view", "toggleDark");
        modeSwitcher.classList.replace("toggleLight", "toggleDark");
    } else if (currentMode.innerHTML === "Dark mode 🌙") {
        currentMode.innerHTML = "Light mode ☀️";
        modeSwitcher.classList.replace("toggleDark", "toggleLight");
        localStorage.setItem("view", "toggleLight");
    }
    let currentView = localStorage.getItem("view", JSON.stringify);
    if (currentView === "toggleLight") {
        localStorage.setItem("view", "toggleDark");
        }    else if ( currentView === "toggleDark")
            localStorage.setItem("view", "toggleLight");
})



//functions


    