const array = [
    {
        id: 1,
        nome: "carla",
        cognome: "rossi",
        email: "carla.rossi@gmial.com",
        codiceFiscale: "nhrbso9845h876",
        indirizzo: "via torino, 3"
    },
    {
        id: 2,
        nome: "valeria",
        cognome: "verdi",
        email: "valeria.verdi@gmial.com",
        codiceFiscale: "vlrvrd78j67g854h",
        indirizzo: "via roma, 10"
    },
    {
        id: 1,
        nome: "elena",
        cognome: "bianchi",
        email: "elena.bianchi@gmial.com",
        codiceFiscale: "elnbnc78h20j945g",
        indirizzo: "via napoli, 8"
    },
];

//RICORDA: nella tabella ogni oggetto è una riga (quindi avremo 3 righe)
//ogni proprietà è una colonna, quindi avremo 6 colonne


const table = document.getElementById("tabella");
array.forEach(persona => {
    //per ogni persona/oggetto dobbiamo creare una riga nella tabella
    const row = document.createElement('tr');

    //per ogni proprietà della persona/oggetto dobbiamo creare una colonna:
    //dovremmo fare un forEach di "persona", ma non si può perchè "persona" è un oggetto
    //non un array e il forEach si può frae slo con gli array
    //PER USARE COME FOSSE UN ARRAY LE PROPRIETA' DI UN OGGETTO SI USA LA CLASSE OBJECT
    //Object.keys(persona) -> questo significa: dall'oggetto "persona" prendi le keys (proprietà)
    //gli facciamo un foreach (perchè per ogni propietà (key) dell'oggetto dobbiamo creare una colonna)
    
    Object.keys(persona).forEach(key => {
        const col = document.createElement('td');
        const text = document.createTextNode(persona[key]);
        col.appendChild(text);
        row.appendChild(col);
    });

    table.appendChild(row);
    
});