// Function to toggle the menu
function toggleMenu() {
    const hamburgerIcon = document.querySelector('.hamburger-icon');
    const menuLinks = document.querySelector('.menu-links');

    // Toggle the 'open' class on the menu and hamburger icon
    menuLinks.classList.toggle('open');
    hamburgerIcon.classList.toggle('open');
}

// Add event listener to hamburger icon
document.querySelector('.hamburger-icon').addEventListener('click', toggleMenu);

// Optional: Close menu when clicking outside of it
document.addEventListener('click', (event) => {
    const menuLinks = document.querySelector('.menu-links');
    const hamburgerIcon = document.querySelector('.hamburger-icon');

    if (!hamburgerIcon.contains(event.target) && !menuLinks.contains(event.target)) {
        menuLinks.classList.remove('open');
        hamburgerIcon.classList.remove('open');
    }
});
