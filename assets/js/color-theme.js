const toggle = document.getElementById("theme-toggle");

function applyTheme(isDark) {
    document.body.classList.toggle("dark-mode", isDark);
    if (toggle) {
        toggle.innerHTML = isDark
            ? '<i class="fa-solid fa-moon fa-spin"></i>'
            : '<i class="fa-solid fa-sun fa-spin"></i>';
    }
}

const saved = localStorage.getItem("theme");
const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
applyTheme(saved === "dark" || (!saved && prefersDark));

if (toggle) {
    toggle.addEventListener("click", () => {
        document.body.classList.add("transitioning");
        const isDark = !document.body.classList.contains("dark-mode");
        applyTheme(isDark);
        localStorage.setItem("theme", isDark ? "dark" : "light");
        setTimeout(() => {
            document.body.classList.remove("transitioning");
        }, 300);
    });
}