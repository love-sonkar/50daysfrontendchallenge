const modal = document.querySelector(".modal");
const modal_body = document.querySelector(".modal-body");
const button = document.querySelector(".btn-delete");
const delete_modal = document.querySelector(".model-delete");

button.addEventListener("click", () => {
  console.log("clik");
  modal.classList.add("modal-active");
  modal_body.classList.add("modal-body-active");
  modal_body.classList.remove("modal-body-active-hide");
});

delete_modal.addEventListener("click", () => {
  modal.classList.remove("modal-active");
  modal_body.classList.remove("modal-body-active");
  modal_body.classList.add("modal-body-active-hide");
});
