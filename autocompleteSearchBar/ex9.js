const input = document.getElementById("ricerca");

//l'evento che associamo all'input, cioè alla barra di ricerca, è keyup che è qull'evento 
//che succede quando finisce la pressione su un tasto da parte dell'utente
//accanto gli dichiariamo la funzione autocomplete che andremo a scrivere noi sotto
//gliela immettiamo senza parentesi perchè sennò la attuerebbe subito 
input.addEventListener("keyup", autocomplete)

const risultati = document.getElementById("risultati");

const nomi = [
    "andrea",
    "anna",
    "marco",
    "luca",
    "giovanni",
    "giovanna",
    "chiara",
    "clara"
];

//terza funzione scritta per autocompletare facendo il match.
//quindi se il valore immesso è vuoto allora non mette nulla nell'array
//poi dichiara una nuova RegExp con parametro valore
//quindi ritorna l'array nomi filtrato secondo un criterio condizionale
//per cui se il nome matcha ritorna il nome
function autocompleteMatch(valore) {
    if (valore == "") return [];
    const reg = new RegExp(valore);
    return nomi.filter(nome => {
        if(nome.match(reg)) return nome;
    })
}

//prima funzione scritta. dichiariamo prima i nomi consigliati come vuoti, dichiariamo che i nomi
//dipendono dal valore dell'input che matchiamo grazie alla funzione autocompleteMatch
//quindi per ogni nome nell'appea dichiarata nomi mettiamo i nomiconsigliati vuoto a cui si aggiunge 
//il nome di cui si è cominciato a scrivere (a cui viene aggiunto un onclick).
//infine facciamo apparire tali nomi nel div con id risultati
function autocomplete(input) {
    let nomiConsigliati = "";
    const nomi = autocompleteMatch(input.target.value);
    nomi.forEach(nome => {
        nomiConsigliati += `<li class="hover:bg-gray-200" onclick="seleziona(event)">${nome}</li>`
    })
    risultati.innerHTML = `<ul>${nomiConsigliati}</ul>`;
}

//seconda funzione scritta. sui nomiconsigliati abbiamo messo un onclick che prevede che, scliccando il nome che si desidera,
// il div con id risultati ritorni vuoto, mentre il valore dell'input si trasformi
//nel contenuto testuale di event (che è il nome selezionato)
function seleziona(event) {
    risultati.innerHTML = '';
    input.value = event.target.textContent;
}
