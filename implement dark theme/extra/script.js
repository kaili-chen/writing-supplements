// waits for DOM to finish loading
document.addEventListener("DOMContentLoaded", function(event) {
    // theme colours
    const lightThemeStylesheet = "light.css";
    const darkThemeStylesheet = "dark.css";

    // gets element for the stylesheet that sets theme colours
    var themeLink = document.getElementById("theme-colours");
    // element for theme switch toggle
    var themeSwitch = document.getElementById("theme-switch");
    // element for navbar
    var navbar = document.getElementById("navbar");

    /** 
     * Changes the webpage's colours, theme switch and navbar colour
     * 
     * @param {string} "light" or "dark"
    */
   function setTheme(theme) {
        if (theme=="dark") {
            localStorage.setItem("theme", "dark");
            themeLink.href = darkThemeStylesheet;
            themeSwitch.checked = true;
            // removes bootstrap light navbar classes and add the dark navbar classes
            navbar.classList.remove("bg-light", "navbar-light");
            navbar.classList.add("bg-dark", "navbar-dark");
        } else {
            localStorage.setItem("theme", "light");
            themeLink.href = lightThemeStylesheet;
            themeSwitch.checked = false;
            // removes bootstrap dark navbar classes and add the light navbar classes
            navbar.classList.remove("bg-dark", "navbar-dark");
            navbar.classList.add("bg-light", "navbar-light");
        }
    };

    // get element of the theme switch toggle
    var themeSwitch = document.getElementById("theme-switch");
    var selectedTheme = localStorage.getItem("theme");
    if (!selectedTheme) {
        // if no theme in local storage, set to system default
        (window.matchMedia("(prefers-color-scheme: dark)")).matches ? setTheme("dark") : setTheme("light");
    } else {
        setTheme(selectedTheme);
    }

    // when user toggles theme switch, change the theme
    themeSwitch.addEventListener('change', (event) => {
        (themeSwitch.checked) ? setTheme("dark") : setTheme("light");
    });
    
});