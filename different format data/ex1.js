//EXERCISE WITH toLocaleString (see the docs)

//dichiaro la costante today che è la data e la mando in console
const today = new Date();
console.log(today)

//dichiaro un array di oggetti con le varie ozpioni dei formati 
//che ho ricavato dalla documentazione su toLocaleString
const options = [
    {
        year: 'numeric',
        month: '2-digit',
        day: '2-digit',
        weekday: 'long'
    },

    {
        hour:'2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: true
    },

    {
        year: 'numeric',
        month: '2-digit',
        day: '2-digit',
        weekday: 'short',
        hour:'2-digit',
        minute: '2-digit',
        second: '2-digit',
    }
]

//mando a schermo in console today con il metodo toLocaleString con la prima option
console.log(today.toLocaleString(undefined, options[0]))

//mando a schermo in console today con il metodo toLocaleString con la seconda option
console.log(today.toLocaleString(undefined, options[1]))


//mando a schermo in console today con il metodo toLocaleString con la terza option
console.log(today.toLocaleString(undefined, options[2]))

//mando a schermo nel body queste date:
//facendo un ciclo for each: quindi va all'interno dell'array option
//per ogni "option" crea un elemento h2, un elemento text
//dentro al text abbiamo la data "today" con il metodo localeString
//con un undefined e la singola option
//poi appendiamo il text all'element
//poi selezioniamo il body e gli appendiamo element

options.forEach(option => {
    const element = document.createElement('h2');
    const dataFormattata = today.toLocaleString(undefined, option);
    const text = document.createTextNode(dataFormattata);
    element.appendChild(text);
    document.querySelector('body').appendChild(element);
});