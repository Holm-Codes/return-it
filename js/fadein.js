/**
 * file: js/js.js
 * purpose: Behaviors
 **/
"use strict";

// Sætter standardteksten ved start
processTitle.textContent = "Sådan sikrer Return It en bæredygtig emballageløsning for dig";
processDescription.textContent = "Klik på et ikon og følg hvert trin i genanvendelsesprocessen";

// Fade-in effekter for andre tekst-sektioner
// Find alle elementer med klassen "fade-in" og observer, hvornår de bliver synlige i viewporten.
// Når de kommer i syne, tilføjes klassen "animate" for at starte animationen.
const fadeInElements = document.querySelectorAll('.fade-in');

// Dette er en IntersectionObserver til at holde øje med elementer i viewporten
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      // Tilføjer klassen "animate", når elementet er synligt
      entry.target.classList.add('animate');
      // Stopper observeringen for dette element, efter animationen er kørt
      observer.unobserve(entry.target);
    }
  });
});

// Tilføjer observeren til alle fade-in elementer
// Gennemgår alle elementer med klassen "fade-in" og sæter dem til at blive observeret af IntersectionObserver.
fadeInElements.forEach(element => {
  observer.observe(element);
});