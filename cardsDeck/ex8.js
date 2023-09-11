class Deck {
    constructor(){
        this.cards = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, "fante", "donna", "re"];
        console.log("Genero nuovo mazzo", this.cards)
    }

    mischia() {
        //sort è un metodo che mischia l'array (in questo metodo si mettono i parametri a e b
        //ch indicano 1 e 2, poi 2 e 3, poi 3 e 4)
        //per far sì che questo mix sia randomico usiamo 0,5 math.random
        this.cards.sort((a, b) => {
            return 0.5 - Math.random()
        })
        console.log('mazzo mischiato', this.cards);
    };

    pesca() {
        //pop è il metodo degli array che ci pemette di eliminare l'ultimo elemento di un array e conservarlo
        //(in alternativa ossiamo usare anche il metodo shift che elimina e conserva il primo elemento dell'array)
        //dichiaro una costante per la carta pescata perchè mi serve manddarla a schermo
        const carta = this.cards.pop();
        //mando a schermo la carta pescata
        console.log("carta pescata", carta);
        //mando a schermo il mazzo senza la carta pescata
        console.log("mazzo dopo la pescata", this.cards);
    };

    //in questa funzione devo passare il parametro della carta che metto sott
    //che viene espicitato quando chiamo la funzione più in basso
    mettiSotto(carta) {
        //il metodo push dell'array inserisce un elemento alla fine dell'array
        //(in alernativa possiamo usare il metodo unshift che inserisce un elemento all'inizio di un array)
        //questo metodo ha un parametro perchè aggiunge un nuovo elemento
        this.cards.push(carta);
        console.log("mazzo dopo metto sotto", this.cards)
    };

};

//creo il nuovo oggetto Deck, derivante dalla classe Deck creata sopra
const deck = new Deck();

//mischio più volte il mazzo
deck.mischia()
deck.mischia()
deck.mischia()

//pesco dal mazzo l'ultima carta e questa funzione fa vedere il mazzo senza la cata pescata
deck.pesca()
deck.pesca()
deck.pesca()

deck.mettiSotto("jolly")