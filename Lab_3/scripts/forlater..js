// For enabling the website's light theme.
function toggleLightTheme() {
    var ele = document.body;
    ele.classList.toggle("lightMode");
}

/*
 * Create a boolean variable check if the user has
 * a dark theme enabled in their OS.
 */
const isDarkMode = window.matchMedia &&
    window.matchMedia('(prefers-color-scheme: dark)').matches;

/*
 * If the user doesn't have dark mode enabled,
 * run the function, 'toggleLightTheme'.
 */
if (!isDarkMode) toggleLightTheme();