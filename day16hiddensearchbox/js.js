const icon = document.querySelector(".icon");
const input = document.querySelector(".input");

icon.addEventListener("click", () => {
  input.focus();
  input.classList.toggle("activeinput");
});
