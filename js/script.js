// Add custom JavaScript here
// User Scroll For Navbar
function userScroll() {
  const navbar = document.querySelector(".navbar");

  window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
      navbar.classList.add("bg-dark");
    } else {
      navbar.classList.remove("bg-dark");
    }
  });
}

document.addEventListener("DOMContentLoaded", userScroll);
