/**
 * file: js/js.js
 * purpose: Behaviors
 **/
console.log('Success: JavaScript from js/js.js running!')

document.addEventListener('DOMContentLoaded', () => {
    const burgerMenu = document.querySelector('.burger-menu'); // The burger menu icon
    const menu = document.querySelector('.menu'); // The hidden menu list

    // Add click event listener to the burger menu
    burgerMenu.addEventListener('click', () => {
        // Toggle the menu's visibility
        if (menu.style.display === 'flex') {
            menu.style.display = 'none';
        } else {
            menu.style.display = 'flex';
        }
    });

    // Scroll to the section when a menu item is clicked
    const menuItems = document.querySelectorAll('.menu li');
    menuItems.forEach(item => {
        item.addEventListener('click', (event) => {
            const targetSection = document.querySelector(item.getAttribute('data-target'));
            if (targetSection) {
                targetSection.scrollIntoView({ behavior: 'smooth' });
                menu.style.display = 'none'; // Close menu after click
            }
        });
    });
});