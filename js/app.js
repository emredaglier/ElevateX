const hamMenu = document.querySelector(".ham-menu");
const offScreenMenu = document.querySelector(".off-screen-menu");
const dropdownLogo = document.querySelector(".dropdown-logo");
const webLogo = document.querySelector(".web-logo");


// Function to handle the toggle behavior based on window width
function handleResize() {
  if (window.innerWidth <= 1047) {
    // For smaller screens, enable the toggle functionality
    hamMenu.addEventListener("click", toggleMenu);
  } else {
    // For larger screens, disable the toggle functionality and reset classes
    hamMenu.removeEventListener("click", toggleMenu);
    hamMenu.classList.remove("active");
    offScreenMenu.classList.remove("active");
    dropdownLogo.classList.remove("active");
    webLogo.classList.remove("active");
  }
}

// Toggle function to add or remove active classes
function toggleMenu() {
  hamMenu.classList.toggle("active");
  offScreenMenu.classList.toggle("active");
  dropdownLogo.classList.toggle("active")
  webLogo.classList.toggle("active")
}

// Initial call to set up the correct behavior on page load
handleResize();

// Event listener for window resize to dynamically update the behavior
window.addEventListener("resize", handleResize);

// Initial classes for large screens
if (window.innerWidth > 1047) {

}
