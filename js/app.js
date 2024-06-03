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

  if (window.innerHeight >= 1000 ){
    offScreenMenu.classList.add("height");
  }
  else{
    offScreenMenu.classList.remove("height");
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

document.addEventListener('DOMContentLoaded', function() {
  const navLinks = document.querySelectorAll('.nav-link');

  navLinks.forEach(function(navLink) {
    const dropdownMenu = navLink.nextElementSibling;

    navLink.addEventListener('click', function(event) {
      event.preventDefault();

      // Close other open dropdown menus
      document.querySelectorAll('.dropdown-content').forEach(function(menu) {
        if (menu !== dropdownMenu) {
          menu.classList.remove('show');
        }
      });

      // Toggle the current dropdown menu
      if (dropdownMenu.classList.contains('show')) {
        dropdownMenu.classList.remove('show');
        setTimeout(function() {
          dropdownMenu.style.display = 'none';
        }, 100); // Matches the transition duration
      } else {
        dropdownMenu.style.display = 'flex';
        setTimeout(function() {
          dropdownMenu.classList.add('show');
        }, 0);
      }
    });
  });

  // Close the dropdown if clicked outside
  document.addEventListener('click', function(event) {
    if (!event.target.closest('.dropdown')) {
      document.querySelectorAll('.dropdown-content').forEach(function(menu) {
        menu.classList.remove('show');
        setTimeout(function() {
          menu.style.display = 'none';
        }, 100); // Matches the transition duration
      });
    }
  });
});
