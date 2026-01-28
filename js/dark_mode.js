// ========= DARK MODE =========
const themeIcon = document.getElementById("themeIcon");

function applyTheme() {
    // Check local storage or system preference
    if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
        document.documentElement.classList.add('dark');
        // Path adjusted to go up one level from /html/ folder
        themeIcon.src = "../src/assets/icons/night.png"; 
    } else {
        document.documentElement.classList.remove('dark');
        themeIcon.src = "../src/assets/icons/moon_black.png";
    }
}

function toggle() {
    const isDark = document.documentElement.classList.toggle("dark");
    
    // Update icon based on current state
    themeIcon.src = isDark 
        ? "../src/assets/icons/night.png" 
        : "../src/assets/icons/moon_black.png";

    localStorage.theme = isDark ? "dark" : "light";
}

// Initialize on load
applyTheme();