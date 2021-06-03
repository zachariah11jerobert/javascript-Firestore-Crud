// modal add
const addModal = document.querySelector(".add-modal");

const btnAdd = document.querySelector(".btn-add");

// Click add user button
btnAdd.addEventListener("click", () => {
  addModal.classList.add("modal-show");
});

// User click antwhere outside the modal
window.addEventListener("click", (e) => {
  if (e.target === addModal) {
    addModal.classList.remove("modal-show");
  }
});
