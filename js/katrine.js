console.log("JavaScript loaded!");
// Følgende er et bjekt, som gemmer data for hvert trin i genanvendelsesprocessen. 
// Hvert trin har et navn (f.eks. "Indledende Samtale") som nøgle, og tilknyttet er et billede og en beskrivelse.
const processData = {
    "Indledende Samtale": {
        image: "images/forhandling.webp",
        description: "Vi indleder samarbejdet med en dialog, hvor du bliver præsenteret for vores cirkulære koncept. Samtidig drøfter vi, hvordan løsningen bedst kan tilpasses behovene for netop dit arrangement."
    },
    "Produktion": {
        image: "images/produktion.webp",
        description: "Efter den indledende samtale påbegynder vi produktionen af emballagen til dit event. Vi sikrer at emballagen baseres på bæredygtige materialer og innovative metoder."
    },
    "Levering": {
        image: "images/levering.webp",
        description: "Efter produktionen af emballagen bliver din ordre leveret til dig i god tid inden eventet. Vi garanterer en præcis og fleksibel levering, så i kan fokusere på jeres arrangement."
    },
    "Brug af emballage": {
        image: "images/emballage.webp",
        description: "Emballagen er designet til både at være æstetisk og praktisk. Den sikrer nem håndtering for dig som arrangør og passer samtidig perfekt til dit events bæredygtige profil."
    },
    "Indsamling": {
        image: "images/indsamling.webp",
        description: "Til jeres event vil i blive forsynet med specielle affaldsspande, der skal indsamle det brugte emballage. Efter eventet sørger vi for effektiv indsamling. Dette er første skridt i vores cirkulære proces."
    },
    "Afhentning": {
        image: "images/afhentning.webp",
        description: "Alt emballage afhentes hurtigt og professionelt via vores samarbejdspartnere. Vi minimerer derigennem dine logistiske bekymringer ved at tage ansvar for hele processen."
    },
    "Vask og omsmeltning": {
        image: "images/vask_omsmeltning.webp",
        description: "Efter emballagen er fragtet tilbage til os påbegynder genanvendelsesprocessen. Vi vasker og omsmelter emballagen til nye produkter, og derigennem understøtter jeres bæredygtige ambitioner."
    },
    "Klar til ny emballage": {
        image: "images/ny_emballage.webp",
        description: "Processen slutter med, at det nye emballage er klar til brug på fremtidige events. Med vores cirkulære system får du en bæredygtig og økonomisk løsning, der sparer dig og dit arrangement ressourcer."
    }
};

// Her findes HTML-elementerne med id'erne "process-title" og "process-description". 
// De indeholder overskriften og beskrivelsen, som vises i midten af cirklen.
const processTitle = document.getElementById("process-title");
const processDescription = document.getElementById("process-description");

// Der bruges querySelectorAll til at finde alle elementer med klassen "process-step" (ikonerne) 
// og "pil" (pile), så der kan tilføjes funktionalitet til dem senere.
// De gemmes i to variabler:
// - "steps" indeholder alle ikonerne i cirklen.
// - "pile" indeholder alle pile, som hører til hvert ikon.
const steps = document.querySelectorAll(".process-step");
const pile = document.querySelectorAll(".pil");

// Gennemgår alle ikoner (elementer med klassen "process-step") og tilføjer en "click"-hændelse.
// Når et ikon bliver klikket på, opdateres teksten i midten af cirklen, og den tilsvarende pil markeres.
steps.forEach((step, index) => {
    step.addEventListener("click", function () {
        // Henter titlen fra ikonet (teksten i <figcaption>)
        const title = step.querySelector("figcaption").textContent.trim();
        // Finder den tilsvarende data (billede og beskrivelse) i objektet "processData"
        const data = processData[title];

        if (data) {
           // Tilføjer en fade-out effekt til midterteksten
            const details = document.querySelector('.process-details');
            details.classList.add('fade'); // Gør teksten usynlig midlertidigt

            setTimeout(() => {
                // Opdaterer overskriften og beskrivelsen, når fade-out er færdig
                processTitle.textContent = title;
                processDescription.textContent = data.description;

                // Fjerner fade-out effekten, så teksten bliver synlig igen
                details.classList.remove('fade');
            }, 300); // Matcher fade-out tiden i CSS 

            // Fjerner "active"-klassen fra alle ikoner og pile
            steps.forEach(s => s.classList.remove("active"));
            pile.forEach(p => p.classList.remove("active"));

            // Tilføjer "active"-klassen til det valgte ikon og den tilsvarende pil
            step.classList.add("active");
            pile[index].classList.add("active");
        } else {
            // Hvis der ikke findes data for det valgte ikon, vises en fejl i konsollen
            console.error("Data for '" + title + "' ikke fundet!");
        }
    });
});

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