function toggleMenu() {
    const hamburgerIcon = document.querySelector('.hamburger-icon');
    const menuLinks = document.querySelector('.menu-links');
    
    // Toggle the 'open' class on the menu and hamburger icon
    menuLinks.classList.toggle('open');
    hamburgerIcon.classList.toggle('open');
}
