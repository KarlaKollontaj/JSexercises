const array = [
    {
        url: "img/bolso.jpg",
        titolo:"Borsa",
        descrizione:"Pezzo unico, fatto a mano con colori naturali"
    },
    {
        url: "img/zapatos.jpg",
        titolo:"Scarpe",
        descrizione:"Tacco 12 cm, in velluto rosso, stile vintage"
    },
    {
        url: "img/sombrero.jpg",
        titolo:"Cappello",
        descrizione:"Pezzo vintage, color cammello, anni '70"
    }
] 

array.forEach(obj => {
    creaCard(obj)
    
});

function creaCard(obj) {
    const card = document.createElement('div');
    card.className = "w-full md:w-1/2 xl:w-1/3 px-4";

    const innerDiv = document.createElement('div');
    innerDiv.className = "bg-white rounded-lg overflow-hidden mb-10 shadow-xl";
    card.appendChild(innerDiv);

    const immagine = document.createElement('img');
    immagine.src = obj.url;
    immagine.className = "w-full";

    innerDiv.appendChild(immagine);

    const textContainer = document.createElement('div');
    textContainer.className = "p-8 sm:p-9 md:p-7 xl:p-9 text-center";
    innerDiv.appendChild(textContainer);

    const title = document.createElement('h3');
    title.className = "font-semibold text-dark text-xl";
    title.appendChild(document.createTextNode(obj.titolo));
    textContainer.appendChild(title);


    const descprition = document.createElement('p');
    descprition.className = "text-base text-body-color leading-relaxed mb-7";
    descprition.appendChild(document.createTextNode(obj.descrizione));
    textContainer.appendChild(descprition);

    document.getElementById('container').appendChild(card);
}