const dark_toggle = document.querySelector(".dark_toggle");
const round_toggle = document.querySelector(".round");
const body = document.querySelector(".body");

dark_toggle.addEventListener("click", () => {
  round_toggle.classList.toggle("active");
  const data = body.getAttribute("data-theme");
  if (data === "light") {
    body.setAttribute("data-theme", "dark");
  } else {
    body.setAttribute("data-theme", "light");
  }
});
