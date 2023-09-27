const hamopen = document.querySelector(".hammenu");
const hamclose = document.querySelector(".close");
const navitems = document.querySelectorAll(".select");

navitems.forEach((item) => {
  hamopen.addEventListener("click", () => {
    item.classList.add("show");
  });
  hamclose.addEventListener("click", () => {
    item.classList.remove("show");
  });
});
