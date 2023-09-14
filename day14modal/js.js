const modal = document.querySelector(".modal");
const modal_body = document.querySelector(".modal-body");
const button = document.querySelector(".btn-delete");
const delete_modal = document.querySelector(".model-delete");
const cancel_modal = document.querySelector(".cancel-modal");

button.addEventListener("click", ModalOpen);
delete_modal.addEventListener("click", ModalOff);
cancel_modal.addEventListener("click", ModalOff);

function ModalOpen() {
  modal.classList.add("modal-active");
  modal_body.classList.add("modal-body-active");
}

function ModalOff() {
  modal.classList.remove("modal-active");
  modal_body.classList.remove("modal-body-active");
}
