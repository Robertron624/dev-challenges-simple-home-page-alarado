function main() {
  // Elements for the theme toggle
  const body = document.body;
  const logoImg = document.querySelector("#logo-img");
  const themeToggleDesktop = document.querySelector("#theme-toggle");
  const themeToggleMobile = document.querySelector("#theme-toggle-mobile");

  function applyTheme(isDark) {
    // Sync theme togglers
    themeToggleDesktop.checked = isDark;
    themeToggleMobile.checked = isDark;

    if (isDark) {
      body.classList.add("dark");
      logoImg.src = "assets/images/alarado-icon-homepage-dark.svg";
    } else {
      body.classList.remove("dark");
      logoImg.src = "assets/images/alarado-icon-homepage.svg";
    }
  }

  // By default, take the user's system preference
  const prefersDarkMode = window.matchMedia(
    "(prefers-color-scheme: dark)"
  ).matches;
  applyTheme(prefersDarkMode);

  // Listen for changes to the theme toggle
  themeToggleDesktop.addEventListener("change", function () {
    const isDarkMode = this.checked;
    applyTheme(isDarkMode);
  });

  themeToggleMobile.addEventListener("change", function () {
    const isDarkMode = this.checked;
    applyTheme(isDarkMode);
  });

  // Handle the mobile menu

  const mobileHamburguerButton = document.querySelector("#mobile-hamburger");
  const mobileMenu = document.querySelector("#mobile-menu");
  const closeMenuBtn = document.querySelector("#close-menu");
  const overlay = document.querySelector("#overlay");

  function openMenu() {
    mobileMenu.classList.add("show-menu");
    overlay.classList.add("show-overlay");
    body.style.overflow = "hidden"; // Prevent scrolling
  }

  function closeMenu() {
    mobileMenu.classList.remove("show-menu");
    overlay.classList.remove("show-overlay");
    body.style.overflow = "auto"; // Allow scrolling
  }

  mobileHamburguerButton.addEventListener("click", openMenu);
  closeMenuBtn.addEventListener("click", closeMenu);

  // Close the menu when clicking on the overlay
  overlay.addEventListener("click", closeMenu);
}

document.addEventListener("DOMContentLoaded", main);
