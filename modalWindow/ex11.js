const openModalBtn = document.getElementById("open-modal");
const closeModalBtn = document.getElementById("close-modal");
const modal = document.getElementById("modal");

openModalBtn.addEventListener("click", openModal);
closeModalBtn.addEventListener("click", closeModal);

//per far apparire e sparire il modal lavoro sull'aggiungere e rimuovere
//la classe hidden che abbiamo in css (in questo caso su tailwindcss)
function openModal() {
    modal.classList.remove("hidden");
}

function closeModal() {
    modal.classList.add("hidden");
}