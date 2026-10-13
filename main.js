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


// Elementi del DOM
let cardsContainer = document.querySelector(`#cardsContainer`);
let loadBtn = document.querySelector(`#loadBtn`);
let resetBtn = document.querySelector("#resetBtn");
let endMessage = document.querySelector("#endMessage");

// Variabili di Controllo
 let currentIndex = 0;
 let articlesPerRow = 3;

 function createCard(article){

    let card = document.createElement('div');
    card.classList.add('col-4', 'my-5');
    card.innerHTML = `<div class="card card-body">
    <h5 class="card-title">${article.title}</h5>
    <p>${article.description}</p>
    </div>`;

    cardsContainer.appendChild(card);
 };

    loadBtn.addEventListener("click", ()=>{
        let nextArticles = articles.slice(currentIndex, currentIndex + articlesPerRow);
        currentIndex += nextArticles.length;

        nextArticles.forEach(cards =>{
            createCard(cards);
        });

        if(currentIndex >= articles.length){
            endMessage.classList.remove("d-none");
            loadBtn.classList.add("d-none");
        }
 });

 resetBtn.addEventListener("click", ()=> {
    cardsContainer.innerHTML = ``;
    endMessage.classList.add("d-none");
    loadBtn.classList.remove("d-none");
    currentIndex = 0;
 });