// light theme colours
const lightTheme = {
    "--bg-colour": "#fafafa", 
    "--font-colour": "#212529",
    "--primary-colour":  "#2196f3",
    "--link-colour": "#2962ff",
    "--alt-contrast-colour": "#fff"
};

// dark theme colours
const darkTheme = {
    "--bg-colour": "#000", 
    "--font-colour": "#fff",
    "--primary-colour":  "#90caf9",
    "--link-colour": "#81d4fa",
    "--alt-contrast-colour": "#5a5a5a"   
};

// root element to be used later to change CSS variables' values
let root = document.documentElement;

/** 
 * Changes the webpage's colours based on colours object passed in
 * 
 * @param {object} themeColours object with the CSS variables and their corresponding colour values
*/
function setTheme(themeColours) {
    console.log("setting theme: " + themeColours);
    for (var name in themeColours) {
        root.style.setProperty(name, themeColours[name]);
    };
};

// waits for DOM to finish loading
document.addEventListener("DOMContentLoaded", function(event) {
    // initial determination of user's system theme
    var isDarkTheme = (window.matchMedia("(prefers-color-scheme: dark)"));
    (isDarkTheme.matches)?setTheme(darkTheme):setTheme(lightTheme);

    // when user changes system theme, also change webpage colours
    isDarkTheme.addEventListener('change', (event) => {
        (isDarkTheme.matches)?setTheme(darkTheme):setTheme(lightTheme);
    });
    
});