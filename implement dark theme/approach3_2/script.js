// theme colours
const lightThemeStylesheet = "light.css";
const darkThemeStylesheet = "dark.css";

// gets element for the stylesheet that sets theme colours
var themeLink = document.getElementById("theme-colours");

// waits for DOM to finish loading
document.addEventListener("DOMContentLoaded", function(event) {
    // initial determination and setting of user's system theme
    var isDarkTheme = (window.matchMedia("(prefers-color-scheme: dark)"));
    // sets themeLink
    themeLink.href = isDarkTheme.matches ? darkThemeStylesheet : lightThemeStylesheet;

    // when user changes system theme, also change webpage's stylesheet
    isDarkTheme.addEventListener('change', (event) => {
        themeLink.href = isDarkTheme.matches ? darkThemeStylesheet : lightThemeStylesheet;
    });
});