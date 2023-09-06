//prendiamo data 1 e data2 

const date1 = document.getElementById("date1");
const date2 = document.getElementById("date2");

function calculate() {
    //dichiaro le variabili del valore delle date convertite in millisecondi tramite getTime()
    //quando ci sono operazioni da fare con le date si usa SEMPRE getTime()
    //getTime() calcola i millisecondi passati da una data default per i pc che è il 1 gennaio 1970 
    //alla data selezionata nell'input: questo renderà il calcolo della differenza fattibile per il computer
    
    const secDate1 = new Date(date1.value).getTime();
    const secDate2 = new Date(date2.value).getTime();

    //mando in consolo log le date prima dichiarate in millisecondi
    console.log(secDate1); 
    console.log(secDate2);

    //dobbiamo effettuare un controllo, cioè deve fare la differenza solo se la data2 è maggiore della data1
    if (secDate2 > secDate1) {
        //dichiaro la differenza
        const difference = secDate2 - secDate1;
        //madno in console log la differenza tra le date precedenti
        //la differenza è i millisecondi, quindi per avere un risultato in giorni
        //dobbiamo dividere la differenza per 1000 (che elimina i millisecondi e li trasforma in secondi), 
        //per 60 i secondi di un minuto, per i 60 minuti di un'ora, per le 24 ore di un giorno
        console.log(difference / (1000 * 60 * 60 * 24));
    }    
}