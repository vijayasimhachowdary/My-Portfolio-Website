/* Style Switcher Toggle */
const styleSwitcherToggle = document.querySelector(".style-switcher-toggler");
styleSwitcherToggle.addEventListener("click", () => {
    document.querySelector(".style-switcher").classList.toggle("open");
})

// Hide style switcher on scroll
window.addEventListener("scroll", () => {
    if (document.querySelector(".style-switcher").classList.contains("open")) {
        document.querySelector(".style-switcher").classList.remove("open");
    }
})

/* Theme Colors */
const alternateStyles = document.querySelectorAll(".alternate-style");
function setActiveStyle(color) {
    localStorage.setItem("color", color); // Store selected color
    changeColor();
}

function changeColor(){
     alternateStyles.forEach((style) => {
        if (localStorage.getItem("color") === style.getAttribute("title")) {
            style.removeAttribute("disabled");
        } else {
            style.setAttribute("disabled", "true");
        }
    })
}
// Checking if 'color' key exists
if(localStorage.getItem("color") !== null) {
    changeColor();
}


/* Day Night Theme */
const dayNight = document.querySelector(".day-night");
dayNight.addEventListener("click", () => {
    dayNight.querySelector("i").classList.toggle("fa-sun");
    dayNight.querySelector("i").classList.toggle("fa-moon");
    document.body.classList.toggle("dark");
    localStorage.setItem("theme", document.body.classList.contains("dark") ? "dark" : "light"); // Store theme
})

window.addEventListener("load", () => {
    // Set Day/Night Icon
    if (document.body.classList.contains("dark")) {
        dayNight.querySelector("i").classList.add("fa-sun");
    } else {
        dayNight.querySelector("i").classList.add("fa-moon");
    }

    // Load Theme from localStorage
    if (localStorage.getItem("theme") === "dark") {
        document.body.classList.add("dark");
        dayNight.querySelector("i").classList.add("fa-sun");
        dayNight.querySelector("i").classList.remove("fa-moon");

    } else {
        document.body.classList.remove("dark");
        dayNight.querySelector("i").classList.add("fa-moon");
        dayNight.querySelector("i").classList.remove("fa-sun");
    }

    // Load Color from localStorage
    if(localStorage.getItem("color") !== null) {
        changeColor();
    } else {
        // Default to color-1 if nothing is stored (or the first available theme)
        setActiveStyle('color-1'); // Default to Green
    }
});