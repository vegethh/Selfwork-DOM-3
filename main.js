// Base dati
const articles = [
    { id: 1, title: "Articolo 1", description: "Descrizione breve dell'articolo 1." },
    { id: 2, title: "Articolo 2", description: "Descrizione breve dell'articolo 2." },
    { id: 3, title: "Articolo 3", description: "Descrizione breve dell'articolo 3." },
    { id: 4, title: "Articolo 4", description: "Descrizione breve dell'articolo 4." },
    { id: 5, title: "Articolo 5", description: "Descrizione breve dell'articolo 5." },
    { id: 6, title: "Articolo 6", description: "Descrizione breve dell'articolo 6." },
    { id: 7, title: "Articolo 7", description: "Descrizione breve dell'articolo 7." },
    { id: 8, title: "Articolo 8", description: "Descrizione breve dell'articolo 8." },
    { id: 9, title: "Articolo 9", description: "Descrizione breve dell'articolo 9." }
];

// Variabili di controllo
let currentIndex = 0;
let articlesPerPage = 3;

// Elementi del DOM
let btnGenera = document.getElementById("btnGenera");
let btnReset = document.getElementById("btnReset");
let contenitoreCard = document.getElementById("contenitoreCard");
let alertFiniti = document.getElementById("alertFiniti");

// Funzione che crea una singola card
function creaCard(articolo) {
    let col = document.createElement("div");
    col.className = "col-12 col-md-6 col-lg-4";

    col.innerHTML = `
        <div class="card shadow-sm">
            <div class="card-body">
                <h5 class="card-title">${articolo.title}</h5>
                <p class="card-text">${articolo.description}</p>
                <span class="badge bg-secondary">ID: ${articolo.id}</span>
            </div>
        </div>
    `;

    return col;
}

// BOTTONE GENERA CARD
btnGenera.addEventListener("click", function () {

    // Prendo i prossimi 3 articoli
    let nextArticles = articles.slice(currentIndex, currentIndex + articlesPerPage);

    // Se non ci sono più articoli
    if (nextArticles.length === 0) {
        btnGenera.classList.add("d-none");          // nascondo il bottone
        alertFiniti.classList.remove("d-none");     // mostro l'alert
        return;
    }

    // Creo e aggiungo le card
    for (let i = 0; i < nextArticles.length; i++) {
        let card = creaCard(nextArticles[i]);
        contenitoreCard.appendChild(card);
    }

    // Avanzo l'indice
    currentIndex = currentIndex + articlesPerPage;

    // Se dopo questo click abbiamo finito gli articoli
    if (currentIndex >= articles.length) {
        btnGenera.classList.add("d-none");
        alertFiniti.classList.remove("d-none");
    }
});

// BOTTONE RESET
btnReset.addEventListener("click", function () {

    // Svuoto il contenitore delle card
    contenitoreCard.innerHTML = "";

    // Resetto l'indice
    currentIndex = 0;

    // Nascondo l'alert
    alertFiniti.classList.add("d-none");

    // Rifaccio apparire il bottone Genera
    btnGenera.classList.remove("d-none");
});