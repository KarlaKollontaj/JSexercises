const openModalBtn = document.getElementById("open-modal");
const closeModalBtn = document.getElementById("close-modal");
const modal = document.getElementById("modal");

openModalBtn.addEventListener("click", openModal);
closeModalBtn.addEventListener("click", closeModal);

function openModal() {
    console.log("apro modal")
    modal.classList.remove("hidden");
}

function closeModal() {
    console.log("chiudo modal")
    modal.classList.add("hidden");
}