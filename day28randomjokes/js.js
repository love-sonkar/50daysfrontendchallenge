const btn = document.querySelector(".btn");
const joketag = document.querySelector(".joke");

btn.addEventListener("click", () => {
  GenerateJokes();
});

async function GenerateJokes() {
  btn.setAttribute("disabled", true);
  try {
    const res = await fetch("https://icanhazdadjoke.com");
    const data = await res.json();
    joketag.innerText = data.joke;
  } catch (error) {
    console.log(error);
  }
  btn.setAttribute("disabled", false);
}

GenerateJokes();
