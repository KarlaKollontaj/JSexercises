const preview = document.getElementById('preview');

const colorPickers = document.querySelectorAll(".color-picker");

//per ogni div colorPicker aggiunngere un evento di mouseover con il parametro e che sta per elemento.
//facciamo un consolelog con il metodo getComputedStyle che ci permette di vedere lo stile css (in questo caso del sincolo elemento
//attraverso il srcElemente, mi fa vedere il colore di sfondo).
//sarà prprio il colore di sfondo quello che mi servirà per colorare il div accanto:
//quindi al passaggio del mouse il div preview cambiera il colore di sfondo che sarà uguale allo fondo dell'elemento su cui si passa sopra
colorPickers.forEach(colorPicker => {
    colorPicker.addEventListener("mouseover", (e) => {
        console.log(getComputedStyle(e.srcElement).backgroundColor)
        preview.style.backgroundColor = getComputedStyle(e.srcElement).backgroundColor;
    })
});