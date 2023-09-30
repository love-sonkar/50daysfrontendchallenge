const result = document.querySelector(".result");
const computer = document.querySelector(".computer");
const Cresult = document.querySelector(".computerresult");
const Uresult = document.querySelector(".userresult");

const button = document.querySelectorAll(".btn");
let userCounter = 0;
let coumputerCounter = 0;
function PrintResult(comp, user) {
  Cresult.innerText = comp;
  Uresult.innerText = user;
}

PrintResult(0, 0);

const Options = ["rock", "paper", "scissors"];

button.forEach((item) => {
  item.addEventListener("click", () => {
    const checkoption = Math.floor(Math.random() * Options.length);
    const value = item.getAttribute("data-value");
    computer.innerText = Options[checkoption];
    if (Options[checkoption] === value) {
      result.innerText = "Match Is Draw..!";
    } else if (Options[checkoption] === "rock") {
      if (value === "scissors") {
        result.innerText = "You Lost";
        PrintResult(++coumputerCounter, userCounter);
      } else {
        result.innerText = "You Won";
        PrintResult(coumputerCounter, ++userCounter);
      }
    } else if (Options[checkoption] === "paper") {
      if (value === "rock") {
        result.innerText = "You Lost";
        PrintResult(++coumputerCounter, userCounter);
      } else {
        result.innerText = "You Won";
        PrintResult(coumputerCounter, ++userCounter);
      }
    } else if (Options[checkoption] === "scissors") {
      if (value === "paper") {
        result.innerText = "You Lost";
        PrintResult(++coumputerCounter, userCounter);
      } else {
        result.innerText = "You Won";
        PrintResult(coumputerCounter, ++userCounter);
      }
     }
  });
});
