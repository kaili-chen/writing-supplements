// get html element 
const htmlEl = document.querySelector("html");

// waits for DOM to finish loading
document.addEventListener("DOMContentLoaded", function(event) {
    // initial determination and setting of user's system theme (data-theme)
    var isDarkTheme = (window.matchMedia("(prefers-color-scheme: dark)"));
    htmlEl.dataset.theme = isDarkTheme.matches ? "dark" : "light";

    // when user changes system theme, also change webpage's stylesheet
    isDarkTheme.addEventListener('change', (event) => {
        htmlEl.dataset.theme = isDarkTheme.matches ? "dark" : "light";
    });
});