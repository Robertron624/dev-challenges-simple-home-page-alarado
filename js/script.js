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

    
    const themeToggle = document.querySelector('#theme-toggle');

    themeToggle.addEventListener('change', function () {
        const isDarkMode = this.checked;
        applyTheme(isDarkMode);
    });
}

document.addEventListener('DOMContentLoaded', main);
