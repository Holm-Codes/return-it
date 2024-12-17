/**
 * file: js/js.js
 * purpose: Behaviors
 **/
console.log('Success: JavaScript from js/js.js running!')

document.addEventListener('DOMContentLoaded', () => {
    const burgerMenu = document.querySelector('.burger-menu'); // Burger menu icon
    const menu = document.querySelector('.menu'); // Hidden menu
    const menuLinks = document.querySelectorAll('.menu a'); // All menu links

    // Toggle Menu Visibility
    burgerMenu.addEventListener('click', () => {
        menu.classList.toggle('open'); // Toggle 'open' class to show/hide menu
    });

    // Highlight active menu item
    menuLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            // Remove 'active' class from all links
            menuLinks.forEach(link => link.classList.remove('active'));

            // Add 'active' class to the clicked link
            e.currentTarget.classList.add('active');
        });
    });
});