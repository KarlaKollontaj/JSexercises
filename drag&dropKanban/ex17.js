//--SECONDA PARTE DELL'ESERCIZIO--
//gestite non solo la parte grafica del drag and drop, ma anche i dati che effettivamente vengono spostati tra colonne. 
//Potete gestirlo come un array di oggetti (colonne) al cui interno c’è un array di oggetti (task). 
//Trascinando il task su un’altra colonna bisogna spostare il task anche all’interno degli array corretti.

//array di oggetti

const placeholderData = [
    {
      id: 0,
      name: "In Coda",
      tasks: [
        { id: 0, name: "Rispondere alle email" },
        { id: 1, name: "Allenare gambe" },
        { id: 2, name: "Ricaricare credito telefono" },
        { id: 3, name: "Prenotare visita dentista" },
      ],
    },
    {
      id: 1,
      name: "Aperto",
      tasks: [],
    },
    {
      id: 2,
      name: "In Revisione",
      tasks: [],
    },
    {
      id: 3,
      name: "Completato",
      tasks: [],
    },
  ];

//--TERZA PARTE ESERCIZIO --
//salvate la posizione dei task in modo permanente utilizzando il localstorage del browser ed al caricamento della pagina generate i task nella loro posizione corrente.

//rinomino l'array per metterlo nel locale Storage
//quindi se trovi data nel localeStorage allora fammi il json parse dei dat che trovi in locale storage
//sennò mi prendi i placeholderData
let data = localStorage.getItem("data") ? JSON.parse(localStorage.getItem("data")) : placeholderData;


generateTasks();


//--PRIMA PARTE ESERCIZIO (drag and drop solo grafico)--
//prendiamo ciò che ci serve dal document
const tasks = document.querySelectorAll(".task");
const colonne = document.querySelectorAll(".colonna");

//dichiariamo come oggetto ciò che dobbiamo draggare, che però al momento è null
let dragItem = null;
//non solo l'oggetto ma anche i dati riguardanti l'ogggetto da spostare sono null per ora
let dragData = null;

//per ogni task nei tasks aggiungiamo questi eventi con le funzioni correlate
tasks.forEach(task => {
    task.addEventListener("dragstart", dragStart)
    task.addEventListener("dragend", dragEnd)
});

//per ogni colonna nelle colonne aggiungiamo questi eventi con le funzioni correlate
colonne.forEach(colonna => {
    colonna.addEventListener("dragover", dragOver)
    colonna.addEventListener("dragenter", dragEnter)
    colonna.addEventListener("dragleave", dragLeave)
    colonna.addEventListener("drop", dragDrop)
});

//leprime due funzioni fanno riferimento ai task

//questa funzione regola il momento in cui si clicca sull'elemento da spostare
//per prima cosa dobbiamo far sparire il task: mettiamo un setTImeOut di 0 secondi che serve a rendere
//fluida la sparizione di esso, dentro il setTimeOut aggiungiamo la classe hidden all'oggetto task
//diciamo che l'oggetto dragItem (quello che spostiamo) è proprio this, cioè questo oggetto ovvero il task
function dragStart() {
    console.log("drag iniziato");
    setTimeout(() => this.classList.add("hidden"), 0);
    dragItem = this;

    //nella seconda parte dell'esercizio oltre a spostare graficamente i task, li spostiamo anche nell'array

    //trova l'index della colonna
    //quindi trova nell'array data (che corrisponde all'array placeholderData) quella colonna (cioè quell'oggetto con nome in coda, aperto, ecc) 
    // che ha come id lo stesso valore della classe data-column dell'elemento con tale classe nel document 
    const indexColonna = data.findIndex((colonna) => {
        return colonna.id == this.parentElement.getAttribute("data-column");
      });

    //trova index del task
    ////quindi trova tra i tasks nell'indice della colonna dell'array  data (che corrisponde all'array placeholderData)  quel task (cioè quell'oggetto task dentro l'array tasks) 
    // che ha come id lo stesso valore della classe data-task dell'elemento con tale classe 
    const indexTask = data[indexColonna].tasks.findIndex((task) => {
        return task.id == this.getAttribute("data-task");
      });

    //cambiamo il valore di dragData da null a quello che ha appena acquisito
    //attraverso il metodo splice
    dragData = data[indexColonna].tasks.splice(indexTask, 1)[0];

    //salviamo tale dato nel locale storage
    localStorage.setItem("data", JSON.stringify(data));
}

//questa funzione regola il momento in cui finisce il drag
//rimuoviamo dall'oggetto task la classe hidden
//dichiariamo l'oggetto da spostare (dragItem) di nuovo come null 
//perchè in questo momento smette di essere il task

function dragEnd() {
    console.log("drag terminato");
    this.classList.remove("hidden");
    dragItem = null;

    //nella seconda parte dell'esercizio oltre a spostare graficamente i task, li spostiamo anche nell'array

    //dopo aver finito di draggare, aggiorniamo la situazione dell'array anche qui
    data[this.parentElement.getAttribute("data-column")].tasks.push(dragData);
    
    console.log(data);

    //salviamo tale dato nel locale storage
    localStorage.setItem("data", JSON.stringify(data));
}

//le ultime quattro funzioni fanno riferimento alla colonna

//dato che dragover di default blocca il lancio dell'evento drop dobbiamo prevenire il default
function dragOver(e) {
    e.preventDefault();
    console.log("drag sopra")
}

function dragEnter() {
    console.log("drag entrato")
}

function dragLeave() {
    console.log("drag uscito")
}

//appendiamo all'oggetto colonna l'oggetto dragItem 
function dragDrop() {
    console.log("drag droppato")
    this.append(dragItem)
}

//nell'array  data (che corrisponde all'array placeholderData), per ogni colonna (per colonna qui si intendono gli oggetti principali, con i name in coda. aperto, in revisione, completato)
//crea una costante targetColumn prendendo dal document quell'elemento che ha come valore della classe data-colum lo stesso valore dell'id della colonna nell'array
//(es: in html il div "Aperto" ha come valore della classe data-column il numero 1, nell'array l'id della colonna che ha come valore 1 è esattamente quella col name "aperto" e così via)
//dopo sempre in questo forEach, ne faccio un'altro in cui, per ogni task all'interno dell'array task, all'interno di colonna
//creo il div del task con la sua classe, la sua classe css, il suo attrivuto draggable, il suo attributo data-task che gli da l'id del task nell'array
//creiamo il testo che corrisponde al nome del task nell'array e infine appendiamo il testo al div e il div alla targetColumn
function generateTasks() {
    data.forEach((colonna) => {
        const targetColumn = document.querySelector(`[data-column='${colonna.id}']`);
        colonna.tasks.forEach((task) => {
            const element = document.createElement('div');
            element.className = "task p-4 rounded-xl shadow-xl bg-white";
            element.setAttribute("draggable", true);
            element.setAttribute("data-task", task.id);
            const text = document.createTextNode(task.name);
            element.appendChild(text);
            targetColumn.appendChild(element);        
        })
    })
}