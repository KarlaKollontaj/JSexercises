//per prima cosa bisogna fetchare i dati da pokedex.json

//fetchiamo il file json pokedex dentro la cartella pokemon.json-master
//allora come risposta ci facciamo ritornare un file json
//allora visualizziamo i dati in un console.log
//infine facciamo un catch per gli errori (cosa significa?)
fetch("pokemon.json-master/pokedex.json")
.then((response) => {
    return response.json()
})
.then((data) => {
    console.log(data)
})
.catch((err) => {})