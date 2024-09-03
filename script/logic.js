//global variables



// let articles = [];

/*update the button element to change the innerHTML and class*/
const buttonToggle = document.getElementById("modeToggle");
//full body tag so it would do the whole thing
const modeSwitcher = document.getElementById("fullPage");

//the actual button itself that will make the switching
buttonToggle.addEventListener("click", function(switcher) {
// switcher.preventDefault();
    let currentMode = document.getElementById("modeToggle");
    if (currentMode.innerHTML === "Light mode ☀️") {
        currentMode.innerHTML = "Dark mode 🌙";
        localStorage.setItem("view", "toggleDark");
        //put the current value of the mode right in the code - what css will be running off of. 
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


    