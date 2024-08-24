function main () {

    const logoImg = document.querySelector('#logo-img');
    const themeToggle = document.querySelector('#theme-toggle');

    themeToggle.addEventListener('change', function () {

        const isDarkMode = this.checked;

        if (isDarkMode) {
            document.body.classList.add('dark');
            logoImg.src = 'assets/images/alarado-icon-homepage-dark.svg';
        } else {
            document.body.classList.remove('dark');
            logoImg.src = 'assets/images/alarado-icon-homepage.svg';
        }
    });
}

document.addEventListener('DOMContentLoaded', main);
