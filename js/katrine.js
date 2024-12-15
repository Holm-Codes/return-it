console.log("JavaScript loaded!");

// Opret et objekt med data for hvert ikon
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
        description: "Efter produktionen af emballagen bliver din ordre leveret til dig i god tid inden eventet. Vi garanterer en præcis og fleksibel levering, så i kan fokusere på jeres arrangerement."
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
        description: "Alt emballage afhentes hurtigt of professionelt via vores samarbejdspartnere. Vi minimerer derigennem dine logistiske bekymringer ved at tage ansvar for hele processen."
    },
    "Vask og omsmeltning": {
        image: "images/vask_omsmeltning.webp",
        description: "Efter emballagen er fragtet tilbage til os påbegynder genanvendelses processen. Vi vasker og omsmelter emballagen til nye produkter, og derigennem understøtter jeres bæredygtige ambitioner."
    },
    "Klar til ny emballage": {
        image: "images/ny_emballage.webp",
        description: "Processen slutter med, at det nye emballage er klar til burg på fremtidige events. Med vores cirkulære system får du en bæredygtig og økonomisk løsning, der sparer dig og dit arrangement ressourcer."
    }
};

// Hent elementerne til midtervisning
const processTitle = document.getElementById("process-title");
const processDescription = document.getElementById("process-description");

// Vælg alle ikoner
const steps = document.querySelectorAll(".process-step");

// Lyt efter klik på hvert ikon
steps.forEach(step => {
    step.addEventListener("click", function () {
        const title = step.querySelector("figcaption").textContent.trim(); // Hent titel
        const data = processData[title]; // Hent data baseret på titlen

        if (data) {
            // Opdater midterteksten
            processTitle.textContent = title;
            processDescription.textContent = data.description;

            // Valgfri: Fremhæv det valgte ikon
            steps.forEach(s => s.classList.remove("active"));
            step.classList.add("active");
        } else {
            console.error("Data for '" + title + "' ikke fundet!");
        }
    });
});

// Standardtekst ved start
processTitle.textContent = "Se, hvordan Return Its kredsløb skaber bæredygtige løsninger";
processDescription.textContent = "Klik på et ikon og følg hvert trin i genanvendelsesprocessen";