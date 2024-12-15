/**
 * file: js/js.js
 * purpose: Behaviors
 **/
console.log('Success: JavaScript from js/js.js running!')

document.addEventListener('DOMContentLoaded', () => {
    const burgerMenu = document.querySelector('.burger-menu'); // Burger menu icon
    const menu = document.querySelector('.menu'); // Hidden menu

    // Toggle Menu Visibility
    burgerMenu.addEventListener('click', () => {
        menu.classList.toggle('open'); // Add or remove the 'open' class
    });
});