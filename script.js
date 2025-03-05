'use strict'

// ZIEL
// Es soll ein blur effekt vorhanden sein, der nach 5s nach dem laden der Seite
// verschwindet
// Zudem soll es eine animierte prozent anzeige geben, die das laden von 0% - 100%
// animiert


// EINGABE
const counter = document.querySelector('#counter')
const loader = document.querySelector('#loader')
let currentNumber = 0
const duration = 3000   // Gesamtdauer der Animation in Millisekunden (3 Sekunden)
const stepTime = duration / 100 // Zeit pro Schritt (jede Erhöhung um 1%)



// VERARBEITUNG
document.addEventListener('DOMContentLoaded', () => {

    // Funktion für die animierte Prozente in der Ladezeit
    const interval = setInterval(() => {
        // Aktualisieren der Anzeige: Zahl plus Prozentzeichen
        counter.textContent = currentNumber + '%';
        // Berechnung und Setzen der Opacity: Bei 0% = 1, bei 100% = 0
        counter.style.opacity = 1 - (currentNumber / 100);
    
        // Sobald 100 erreicht ist, wird das Intervall gestoppt
        if (currentNumber === 100) {
            clearInterval(interval)
        }
        else {
            currentNumber++
        }
    }, stepTime)

    // Der animierte Blur-Effekt: Blur verschwindet stückweise (durch transition im CSS)
    loader.classList.add('no-blur');
})



// VERARBEITUNG