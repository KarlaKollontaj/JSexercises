//prendiamo tutti gli elementi che ci servono

const lunghezzaPassword = document.getElementById("lunghezza");
const caratteriMinuscoli = document.getElementById("caratteri-minuscoli");
const caratteriMaiuscoli = document.getElementById("caratteri-maiuscoli");
const caratteriNumerici = document.getElementById("caratteri-numerici");
const caratteriSpeciali = document.getElementById("caratteri-speciali");
const generaBtn = document.getElementById("genera-btn");
const risultatoDiv = document.getElementById("risultato");

//dichiariamo le liste di caratteri da cui sarà costituita la password

const listaCaratteriMinuscoli = "abcdefghijklmnopqrstuvwxyz";
const listaCaratteriMaiuscoli = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const listaCaratteriNumerici = "0123456789";
const listaCaratteriSpeciali = "!\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~)";

//aggiungiamo al bottone un event listener al click legato alla fuzione generaPassword

generaBtn.addEventListener("click", generaPassword)

//nella funzione generaPassword abbiamo la stringaIniziale vuota in cui andranno a finire tutti i caratteri delle liste sopra dichiarate
//e abbiamo la stringa vuota del risultato che sarà la vera password oppurtunamente processata

function generaPassword(){
    let stringaIniziale = "";
    let risultato = "";

    //se l'input caratteri minuscoli è checked (valore che abbiamo messo in html), 
    //allora metti nella stringa iniziale tutta la lista dei caratteri minuscoli 
    //e così via per tutti gli if

    if(caratteriMinuscoli.checked){
        stringaIniziale += listaCaratteriMinuscoli;
    };
    if(caratteriMaiuscoli.checked) {
        stringaIniziale += listaCaratteriMaiuscoli;
    };
    if(caratteriNumerici.checked) {
        stringaIniziale += listaCaratteriNumerici;
    };
    if(caratteriSpeciali.checked) {
        stringaIniziale += listaCaratteriSpeciali;
    };

    //ora considerando il valore che l'utente ha scelto per la lunghezza della password, partendo da zero e facendo un passo alla volta,
    //la password reale verrà messa dentro alla stringa vuota "risultato" prendendo in modo randomico (math.random) dalla stringaIniziale ora piena dei caratteri checkati
    //i caratteri (charAt) eliminando quelli decimali (math.floor) per tutta la lunghezza della stringaIniziale

    for (let i = 0; i < lunghezzaPassword.value; i++) {
        risultato += stringaIniziale.charAt(Math.floor(Math.random()*stringaIniziale.length));
    }

    //quindi s inietta la psw nel div che la contiene,
    //ma prima di essa si inietta un testo vuoto affinche tutte le volte che si spinge il bottone si cancella la psw prcedente
    
    risultatoDiv.innerHTML = "";
    risultatoDiv.innerHTML = risultato;
}