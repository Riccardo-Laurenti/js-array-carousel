/* 
 Dato un array contenente una lista di cinque immagini, creare un carosello come nello screenshot allegato.
 - Potete anche usare immagini diverse e variare leggermente lo stile, l'importante è la logica !

MILESTONE 1 :
- Per prima cosa, creiamo il markup statico: costruiamo il container e inseriamo un'immagine grande al centro: avremo così la struttura base e gli stili pronti per poterci poi concentrare solamente sull'aspetto logico.

MILESTONE 2 :
- Adesso rimuoviamo tutto il markup statico e inseriamo tutte le immagini dinamicamente servendoci dell'array fornito 
  e un semplice ciclo for che concatena un template literal.

Tutte le immagini saranno nascoste, tranne la prima, che avrà una classe specifica che la renderà visibile.

Al termine di questa fase ci ritroveremo con lo stesso slider stilato nella milestone 1, ma costruito dinamicamente attraverso JavaScript.

MILESTONE 3 :
- Al click dell'utente sulle frecce, il programma cambierà l’immagine attiva, che quindi verrà visualizzata al posto della precedente.  */



// Lista immagini

const imgs = ['01.webp', '02.webp', '03.webp', '04.webp', '05.webp'];
const titles = ['Spider-Man', 'Ratchet & Clank', 'Fortnite', 'Stray', 'Marvel: Avengers'];

// Variabili

let active = 0;
const slider = document.querySelector('.slider');
const thumbNail = document.querySelector('.thumbnails');
const titleGroup = document.querySelector('.titles');

// Ciclo immagini dinamiche
for (let i = 0; i < imgs.length; i++) {
    slider.innerHTML += `<div class="item"><img src="img/${imgs[i]}" alt="Immagine ${i + 1}"></div>`;
    thumbNail.innerHTML += `<div class="thumbnail shadow" id="${i + 1}"><img src="img/${imgs[i]}" alt="Immagine ${i + 1}"></div>`;
    titleGroup.innerHTML += `<div class="game-title">${titles[i]}</div>`;
}

// Lista elementi nascosti
const items = document.querySelectorAll('.item');
const gameTitles = document.querySelectorAll('.game-title');

// Lista elementi oscurati
const thumbNails = document.querySelectorAll('.thumbnail');

// Aggiunta classe a un elemento per renderlo visibile
items[active].classList.add('show');
gameTitles[active].classList.add('show');

// Rimossa classe a un elemento per renderlo non oscurato
thumbNails[active].classList.remove('shadow');

// Variabili per eventi
const previous = document.querySelector('.previous');
const next = document.querySelector('.next');

// Previous
previous.addEventListener('click',
function() {
    if (active > 0) {
        items[active].classList.remove('show');
        gameTitles[active].classList.remove('show');
        thumbNails[active].classList.add('shadow')
        active--;
        items[active].classList.add('show');
        gameTitles[active].classList.add('show');
        thumbNails[active].classList.remove('shadow')
    } else {
        items[active].classList.remove('show');
        gameTitles[active].classList.remove('show');
        thumbNails[active].classList.add('shadow')
        active = imgs.length - 1;
        items[active].classList.add('show');
        gameTitles[active].classList.add('show');
        thumbNails[active].classList.remove('shadow')
    }
}
)

// Next
next.addEventListener('click',
function() {
    if (active < imgs.length - 1) {
        items[active].classList.remove('show');
        gameTitles[active].classList.remove('show');
        thumbNails[active].classList.add('shadow')
        active++;
        items[active].classList.add('show');
        gameTitles[active].classList.add('show');
        thumbNails[active].classList.remove('shadow')
    } else {
        items[active].classList.remove('show');
        gameTitles[active].classList.remove('show');
        thumbNails[active].classList.add('shadow')
        active = 0;
        items[active].classList.add('show');
        gameTitles[active].classList.add('show');
        thumbNails[active].classList.remove('shadow')
    }
}
)



thumbNail.addEventListener('click', function(e) {
    let mini = (e.target.id);
    
    if (mini !== "") {
    items[active].classList.remove('show');
    gameTitles[active].classList.remove('show');
    thumbNails[active].classList.add('shadow')
    active = mini - 1;
    items[active].classList.add('show');
    gameTitles[active].classList.add('show');
    thumbNails[active].classList.remove('shadow')
    console.log(mini);}
}
, false);