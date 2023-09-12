//Compito: prendere un esempio di dati JSON che potremmo ricevere dagli API di Firebase 
//e convertirlo in un array di oggetti.
//infatti  abbiamo ricevuto dei dati riguardanti degli utenti: il problema è che non sono strutturati come un array di oggetti utente,
//bensì come un unico grande oggetto. Il nostro compito è appunto quello di rivedere interamente l’oggetto per creare un array di oggetti.

//questo è "l'oggettone" ricevuto che dobbiamo covertire in un array di oggetti

//in questo oggetto data, abbiamo una key users, che è a sua volta un oggetto
//l'oggetto/key users ha le key/oggetto  wqiu237uh390fvx e ksxz993ql617oer
//che però sono un id (dovrebbero cioè non essere key, ma value, cioè id: "ksxz993ql617oer")
const data = {
    users: {
      wqiu237uh390fvx: {
        firstname: "luca",
        lastname: "rossi",
      },
      ksxz993ql617oer: {
        firstname: "marco",
        lastname: "verdi",
      },
    },
  };
 

const users = [];

//prima di tutto vediamo in console a cosa corrisponde data
//(questo è il risultato di data:
//users: 
//ksxz993ql617oer: {firstname: 'marco', lastname: 'verdi'}
//wqiu237uh390fvx: {firstname: 'luca', lastname: 'rossi'})
//In questo modo quindi ci prende anche la key users
console.log(data);

//vediamo in consolelog a cosa corrisponde data.users
//(questo è il risultato di data.users)
//ksxz993ql617oer: {firstname: "marco" lastname : "verdi"}
//wqiu237uh390fvx: {firstname: "luca"lastname: "rossi"}
//In questo modo ci prende solo le key numeriche che sono quelle che ci interessano
//per trasformarle in value nel nuovo array di oggetti
console.log(data.users)

//quindi prendiamo data.users e scriviamo
//per ogni key (cioè ksxz993ql617oer e wqiu237uh390fvx) in data.users
for(let key of Object.keys(data.users)) {
    //inserisci dentro l'array vuoto user (dichiarato sopra) un nuovo oggetto (mettendo le graffe)
    //costituito da id (nuova key) che ha come value la vecchia key cioè ksxz993ql617oer e wqiu237uh390fvx
    //e con il spread operator (...data.users[key]) metto sullo stesso livello di id
    //firstname: "marco" lastname : "verdi" in uno e firstname: "luca"lastname: "rossi" nell'altro
    users.push({id: key, ...data.users[key]})
}

console.log(users);