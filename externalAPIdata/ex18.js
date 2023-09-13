const select = document.getElementById("breeds");
const container = document.getElementById("container");

//fetchiamo l'api con tutte le razze di cani e le trasformiamo in un json
//quindi dei dti prendiamo la parte "message" che è quella che contiene solo le razze (della parte status non ci interessa)
//
fetch("https://dog.ceo/api/breeds/list/all")
.then((response) => response.json())
.then((data) => {
    const obj = data.message;

    //essendo obj un oggetto con proprietà, per scorrere le sue proprietà non possiamo usare solo il foreach
    //ma dobbiamo usare l'object.keys.nomeoggetto.foreach 
    //se la lunghezza dell'array key dell'obj è zero, allora inseriscimi nel select (grazie alla funzione createOption) solo la key
    //altrimenti fammi un foreach per ogni elemento dell'array key dell'obj, inserendomi nel select (grazie alla funzione createption) l'elemento insieme alla key
    Object.keys(obj).forEach(key => {
        if(obj[key].length == 0) {
            //console.log(key);
            createOption(key);
        }else{
            //console.log(key);
            obj[key].forEach(element => {
                console.log("-->",`${element} ${key}`);
                createOption(`${element} ${key}`)
            });
        }
    });
    caricaDati(select.value);
});

//funzione al cambio del valore di select che rimuove il primo figlio di ogni elemento
//e attiva la funzione carica dati
select.addEventListener("change", (e) => {
    while(container.firstChild){
        container.removeChild(container.firstChild)
    }
    //console.log(e.target.value);
    caricaDati(e.target.value);
})

//funzione per creare le opzioni di selezione (selectin html)
function createOption(value){
    const option = document.createElement('option');
    option.value = value;
    option.appendChild(document.createTextNode(value));
    select.appendChild(option);
}

//gunzione per caricare i dati delle varie razze con richiamo alla funzione per generare cards
function caricaDati(breed) {
    if(breed == "") return
    fetch(`https://dog.ceo/api/breed/${breed}/images`)
    .then((response) => response.json())
    .then((data) => {
        console.log(data)
        generaCard(data.message)
    })
}

//funzione per generare in modo casuale le card con le foto
function generaCard(photos){
    photos.sort(() => Math.random() - 0.5)
    photos.forEach(photo => {
        const card = document.createElement("div");
        card.className = "rounded-xl shadow-xl text-xl bg-white h-[200px] w-[200px] bg-cover";
        card.style.backgroundImage = `url(${photo})`;
        container.appendChild(card);
    })

}