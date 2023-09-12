//Nota prima di cominciare: i dati verrano salvati in localstorage
//guarda documentazione:
// https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage

class ToDoList {
    constructor(){
        //i tasks di quest'oggetto vengono caricati come array dal Json in localstore
        this.tasks = this.caricaTask();
        //richiamo della funzione generaTask(non l'ho capita)
        this.generaTask();
        console.log("tasks", this.tasks)
    }

    //con questa funzione prendendo come parametro il task
    //con il push mettiamo dentro l'array tasks di questo oggetto il task appena scritto
    //e richiama la funzione generaNuovoTask
    aggiungiTask (task) {
        this.tasks.push(task);
        this.generaNuovoTask(task);
        //salviamo il task nel local storage con il metodo setItems
        //gli passiamo il JSON col metodo stringify perchè altirmenti non memorizzerebbe dati, 
        //ma solo stringhe (in questo modo è una stringa leggibile dal browser ma anche un dato)
        localStorage.setItem("tasks", JSON.stringify(this.tasks));
    }
    
    //funzione per cancellare il singolo task dall'array tasks dell'oggetto ToDoList
    //essendo un array dobbiamo ragionare sugli indici!
    concludiTask(task) {
        //dichiaro l'indice del task
        const index = this.tasks.indexOf(task);
        //adotto il metodo splice che elimina 1 elemento dall'array partendo dall'indice del task in questione
        //quindi elimina il task stesso
        this.tasks.splice(index, 1);
        //mandiamo a schermo l'array task per vedere cosa è stato eliminato
        console.log(this.tasks);
        //eliminiamo dal local storage i task non facendo remove, ma semplicemente sovrascrivendo
        //l'azione di questa funzione che li rimuove dall'array
        localStorage.setItem("tasks", JSON.stringify(this.tasks));
    }

    //funzione di caricamento dei task in forma di array dai json in local storage
    caricaTask() {
        const tasks = JSON.parse(localStorage.getItem("tasks")) ?? [];
        return tasks;
    }

    //funzione per mandare a schermo la todolist che scriviamo
    //e per eliminare un task già fatto
    generaNuovoTask(task) {
        //al paragrafo appendiamo un testo con dentro il task
        //prendiamo il div per la todolist, criamo un paragrafo,
        //appendiamo il paragrafo al fiv della todolist
        const toDo = document.getElementById("todo-container");
        const p = document.createElement('p');
        p.appendChild(document.createTextNode(task));
        toDo.appendChild(p);
        //ora aggiungiamo al paragrafo un evento al suo click con il parametro (e)
        //che rppresenta il task che scriviamo
        //al click sul paragrafo che include il task che abbiamo scritto si attiva la funzione concludiTask
        //e si rimuove l'elemento p con dentro e, cioè quello che abbiamo scritto
        p.addEventListener("click", (e) => {
            this.concludiTask(task)
            e.srcElement.remove();
        })    
    }

    //uguale alla funzione generaNuovoTask, ma serve per far rimanere i task visibili nel browser anche se si ricarica la pagina
    //(non l'ho capita)
    generaTask() {
        this.tasks.forEach(task => {
            const toDo = document.getElementById("todo-container");
            const p = document.createElement('p');
            p.appendChild(document.createTextNode(task));
            toDo.appendChild(p);
            p.addEventListener("click", (e) => {
                this.concludiTask(task)
                e.srcElement.remove();
            })
        })
    }
        

}


//questa volta prima di cominciare a scrivere il codice di funzionamento
//apriamo con questo domContentLoaded che è un controllo extra
//che ci rende sicuri del fatto che almcaricamento della pagina tutto il contenuto del dom sia stato caricato

document.addEventListener("DOMContentLoaded", () => {
    const newTaskBtn = document.getElementById("new-task-btn");
    const clearBtn = document.getElementById("clear-btn");
    const input = document.getElementById("new-task");

    const toDoList = new ToDoList();

    //al click del bottone AddTask in console viene fuori il valore dell'input, cioè quello che scriviamo nella barra
    //e si attiva la funzine "aggiungi task" relativa alla toDoList che aggiunge al task nel constructor dell'oggetto
    //il valore dell'input,cioè ciò che si scrive nella barra di input
    newTaskBtn.addEventListener("click", () => {
        console.log(input.value);
        toDoList.aggiungiTask(input.value);
    })

    clearBtn.addEventListener("click", () => {
        console.log("clear task")
    })

    //mettiamo (e) come parametro perchè ciò simboleggia le lettere che pigiamo
    //oltre al messaggio scritto in consolelog
    input.addEventListener("keypress", (e) => {
        //console.log(e, "writing new task")
        //se il tasto premuto è enter allora fa vedere in concole log ciò che si è appena scritto e
        //si attiva la funzione aggiungiTask che aggiunge il task appena scritto all'array task nel constructor dell'oggetto ToDoList e 
        //infine, premendo enter, si cancella il value dell'input (cioè della barra di ricerca)
        if(e.key === "Enter") {
            console.log(input.value);
            toDoList.aggiungiTask(input.value);
            input.value = "";
        }
    })
});