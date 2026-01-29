// ========= DARK MODE =========
document.addEventListener("DOMContentLoaded", () => {
    const themeIcon = document.getElementById("themeIcon");
    const html = document.documentElement;

    function applyTheme() {
        const isDark =
            localStorage.theme === "dark" ||
            (!("theme" in localStorage) &&
                window.matchMedia("(prefers-color-scheme: dark)").matches);

        html.classList.toggle("dark", isDark);
        themeIcon.classList.toggle("fa-solid", isDark);
        themeIcon.classList.toggle("fa-regular", !isDark);
    }

    window.toggle01 = function () {
        const isDark = html.classList.toggle("dark");

        themeIcon.classList.toggle("fa-solid", isDark);
        themeIcon.classList.toggle("fa-regular", !isDark);

        localStorage.theme = isDark ? "dark" : "light";
    };

    applyTheme();
});
