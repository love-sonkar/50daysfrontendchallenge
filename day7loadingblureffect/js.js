const button = document.querySelector(".button");
const target = document.querySelector(".target");

button.addEventListener("click", () => {
  button.setAttribute("disabled", true);
  target.classList.add("blur");
  setTimeout(() => {
    target.classList.remove("blur");
    button.removeAttribute("disabled");
  }, 1000);
});
