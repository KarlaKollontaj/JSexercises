//richiamo tutti gli elementi che mi servono
const urlImmagine = document.getElementById("image");
const coloreTitolo = document.getElementById("title-color");
const coloreParagrafo = document.getElementById("paragraph-color");
const paddingX = document.getElementById("padding-x");
const paddingY = document.getElementById("padding-y");
const borderRadius = document.getElementById("border-radius");

//per cambiare url immagine aggiungo un event listener all'inserimento dell'input con parametro (e) che simboleggia ciò che viene inserito
//(no change perchè per vedere i cambiamenti l'utente deve cliccare fuori dal form)
//richiamo l'immagine e do una nuova source all'immagiine che corrisponde al valore del parametro inserito
urlImmagine.addEventListener("input", (e) => {
    const immagine = document.querySelector("#card img");
    immagine.src = e.target.value;
    })

//per cambiare il colore del titolo aggiungo un event listener all'inserimento dell'input con parametro (e) che simboleggia ciò che viene inserito
//(no change perchè per vedere i cambiamenti l'utente deve cliccare fuori dal form)
//richiamo il titolo e do un nuovo colore nello stile che corrisponde al valore del parametro (e) inserito

coloreTitolo.addEventListener("input", (e) => {
    const titolo = document.querySelector("#card h2");
    titolo.style.color = e.target.value;
})

//per cambiare il colore del paragrafo aggiungo un event listener all'inserimento dell'input con parametro (e) che simboleggia ciò che viene inserito
//(no change perchè per vedere i cambiamenti l'utente deve cliccare fuori dal form)
//richiamo il paragrafo e do un nuovo colore nello stile che corrisponde al valore del parametro (e) inserito
coloreParagrafo.addEventListener("input", (e) => {
    const testo = document.querySelector("#card p");
    testo.style.color = e.target.value;
})

//per cambiare il padding orizzontale aggiungo un event listener all'inserimento dell'input con parametro (e) che simboleggia ciò che viene inserito
//(no change perchè per vedere i cambiamenti l'utente deve cliccare fuori dal form)
//richiamo il div da cui cambiare il padding e do un nuovo padding a sinistra e a destra nello stile che corrisponde al valore del parametro (e) inserito

paddingX.addEventListener("input", (e) => {
    const div = document.querySelector("#card div");
    div.style.paddingLeft = `${e.target.value}px`;
    div.style.paddingRight = `${e.target.value}px`;
})

//per cambiare il padding verticale aggiungo un event listener all'inserimento dell'input con parametro (e) che simboleggia ciò che viene inserito
//(no change perchè per vedere i cambiamenti l'utente deve cliccare fuori dal form)
//richiamo il div a cui cambiare il padding e do un nuovo padding spra e sotto nello stile che corrisponde al valore del parametro (e) inserito

paddingY.addEventListener("input", (e) => {
    const div = document.querySelector("#card div");
    div.style.paddingTop = `${e.target.value}px`;
    div.style.paddingBottom = `${e.target.value}px`;
})

//per cambiare il border radius aggiungo un event listener all'inserimento dell'input con parametro (e) che simboleggia ciò che viene inserito
//(no change perchè per vedere i cambiamenti l'utente deve cliccare fuori dal form)
//richiamo sia tutto il div della card che l'immagine ( se non richiamo anche l'immagine l'arrotondamento si vedrà solo sotto perchè l'immagine l'andrebbe a copire)
//do al div intero un nuovo border radius nello stile che corrisponde al valore del parametro (e) inserito
//la stessa cosa la faccio con il border topleft e topright dell'immagine (per quanto scritto sopra tra parentesi)

borderRadius.addEventListener("input", (e) => {
    const card = document.getElementById("card");
    const immagine = document.querySelector("#card img");
    card.style.borderRadius = `${e.target.value}px`;
    immagine.style.borderTopLeftRadius = `${e.target.value}px`;
    immagine.style.borderTopRightRadius = `${e.target.value}px`;

})