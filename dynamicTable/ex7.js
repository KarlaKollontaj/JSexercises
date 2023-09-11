//per creare una tabella totoalmente in modo dinamico creo la classe tabella


class Tabella {
    //la classe tabella è costituita da nomicolonne e i vari data
    nomiColonne;
    data;

    //costruiamo la classe tabella facendo riferimento a nomicolonne e data
    //diciamo che i nomicolonne di questo oggetto sono i nomicolonne(che verranno espressi fuori dalla classe)
    //diciamo che i data di questo oggetto sono i data(che verranno espressi fuori dalla classe)
    //infine diciamo che questo oggetto so costruisce attraverso la funzione generaTabella
    constructor (nomiColonne, data) {
        this.nomiColonne = nomiColonne;
        this.data = data;
        this.generaTabella()
    }

    //fuori dal constructor, facciamo la funzione che genera la tabella, che comprende
    //la funzione che genera le colonne e quella che genera le righe

    generaTabella() {
        const tabella = document.createElement('table');
        tabella.appendChild(this.generaColonne());
        tabella.appendChild(this.generaRighe())
        document.querySelector('body').appendChild(tabella);
    }

    //qui si generano le colonne costruendo un thead e mettendo dentro ad esso, attraverso degli appendchild,
    //un forEach dei nomiColonne di questo oggetto 

    generaColonne(){
        const thead = document.createElement('thead');
        this.nomiColonne.forEach(nomeColonna => {
            const th = document.createElement('th');
            const text = document.createTextNode(nomeColonna);
            th.appendChild(text);
            thead.appendChild(th);
        });
        return thead;
    }; 

    //qui si generano le righe (per Object.keys leggi gli appunti dell'esercizio6: qui viene usato perchè ogni singolo data
    //come si vede sotto, non è un array, ma un oggetto)

    generaRighe(){
        const tbody = document.createElement('tbody');
        this.data.forEach(riga => {
            const tr = document.createElement('tr');
            Object.keys(riga).forEach((key) => {
                const cella = document.createElement('td');
                const text = document.createTextNode(riga[key]);
                cella.appendChild(text);
                tr.appendChild(cella);
            })
            tbody.appendChild(tr);
        })
        return tbody;
    }
};

//qui dichiaro con degli array cosa effettivamente deve esserci nei nomiColonne dell'oggetto tabella

const nomiColonne1 = ['id', 'nome', 'cognome', 'email', 'codiceFiscale', 'indirizzo'];
const nomiColonne2 = ['id', 'prodotto', 'prezzo']

//qui dichiaro con degli array di oggetti con cosa effettivamente deve esserci nei data dell'oggetto tabella

const data1 = [
    {id: 1, nome: 'Carla', cognome: 'Rossi', mail: 'carlarossi@gmail.com', codiceFiscale: 'RSSCRL78F76F90F', indirizzo:'Bologna, via Roma, 2'},
    {id: 1, nome: 'Valeria', cognome: 'Bianchi', mail: 'valeriabianchi@gmail.com', codiceFiscale: 'WWWWWWWWWWW', indirizzo:'Torino, via Bologna, 2'},
    {id: 1, nome: 'Elena', cognome: 'Verdi', mail: 'elenavardi@gmail.com', codiceFiscale: 'LLLLLLLLLLLLL', indirizzo:'Roma, via Torino, 2'},
    {id: 1, nome: 'Matteo', cognome: 'Blu', mail: 'matteoblu@gmail.com', codiceFiscale: 'SSSSSSSSSSS', indirizzo:'Milano, via Napoli, 2'},
    {id: 1, nome: 'Francesca', cognome: 'Rosa', mail: 'francescarosa@gmail.com', codiceFiscale: 'GGGGGGGGGGGGG', indirizzo:'Firenze, via Genova, 2'}
]
const data2 = [
    {
        id: 1,
        prodotto: 'hamburger',
        prezzo: 3.99
    },
    {
        id: 2,
        prodotto: 'hotdog',
        prezzo: 2.99
    },
    {
        id: 3,
        prodotto: 'tacos',
        prezzo: 4.99
    }
];

//qui infine creo effettivamente due nuovi oggetti tabella

const tabella1 = new Tabella (nomiColonne1, data1);
const tabella2 = new Tabella (nomiColonne2, data2);