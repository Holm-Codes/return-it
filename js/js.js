/**
 * file: js/js.js
 * purpose: Behaviors
 **/
console.log('Success: JavaScript from js/js.js running!')

document.addEventListener('DOMContentLoaded', () => {
    const burgerMenu = document.querySelector('.burger-menu'); // The burger menu icon
    const menu = document.querySelector('.menu'); // The hidden menu list

    // Toggle the menu's visibility when the burger menu is clicked
    burgerMenu.addEventListener('click', () => {
        menu.classList.toggle('open'); // Add/remove the 'open' class to slide in/out
    });

    // Scroll to the section when a menu item is clicked
    const menuItems = document.querySelectorAll('.menu li');
    menuItems.forEach(item => {
        item.addEventListener('click', () => {
            const targetSection = document.querySelector(item.getAttribute('data-target'));
            if (targetSection) {
                targetSection.scrollIntoView({ behavior: 'smooth' });
                menu.classList.remove('open'); // Close the menu after scrolling
            }
        });
    });
});