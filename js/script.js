function main() {
  const body = document.body;
  const logoImg = document.querySelector("#logo-img");

  function applyTheme(isDark) {
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
  const themeToggles = document.querySelectorAll(
    "#theme-toggle",
    "#theme-toggle-mobile"
  );

  // themeToggle.addEventListener('change', function () {
  //     const isDarkMode = this.checked;
  //     applyTheme(isDarkMode);
  // });

  themeToggles.forEach((toggle) => {
    toggle.checked = prefersDarkMode;

    toggle.addEventListener("change", function () {
      const isDarkMode = this.checked;
      applyTheme(isDarkMode);

      // Sync both toggles
      themeToggles.forEach((t) => {
        if (t !== this) {
          t.checked = isDarkMode;
        }
      });
    });
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
