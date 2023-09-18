const para = document.querySelector(".content");
const paraelment = para.innerText;
const readme_body = document.querySelector(".readme_body");

const button = document.querySelector(".button");

button.addEventListener("click", () => {
  para.toggleAttribute("data-isCut-true");
  paraCut();
});

function paraCut() {
  const GetData = para.getAttribute("data-isCut-true");
  if (GetData === "") {
    para.innerText = paraelment.slice(0, 70) + "...";
  } else {
    para.innerText = paraelment;
  }
}

paraCut();
