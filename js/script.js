function main () {
    const body = document.body;
    const logoImg = document.querySelector('#logo-img');

    function applyTheme(isDark) {
        if (isDark) {
            body.classList.add('dark');
            logoImg.src = 'assets/images/alarado-icon-homepage-dark.svg';
        } else {
            body.classList.remove('dark');
            logoImg.src = 'assets/images/alarado-icon-homepage.svg';
        }
    }

    // By default, take the user's system preference
    const prefersDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;
    applyTheme(prefersDarkMode);


    // Listen for changes to the theme toggle
    const themeToggle = document.querySelector('#theme-toggle');

    themeToggle.addEventListener('change', function () {
        const isDarkMode = this.checked;
        applyTheme(isDarkMode);
    });
}

document.addEventListener('DOMContentLoaded', main);
