let intervalconst;
let i = 4;
let heading = document.querySelector(".heading");

const clearfunction = () => {
  setTimeout(() => {
    clearInterval(intervalconst);
    i = 4;
    heading.innerText = "GO";
    getready.innerText = "";
    button.style.display = "block";
  }, 5000);
};
const getready = document.querySelector(".getready");
const button = document.querySelector(".button");

button.addEventListener("click", () => {
  getready.innerText = "Let's Go";
  button.style.display = "none";

  intervalconst = setInterval(() => {
    i--;
    heading.innerText = i;
  }, 1000);

  clearfunction();
});