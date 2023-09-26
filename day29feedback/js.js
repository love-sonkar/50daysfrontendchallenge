const btn = document.querySelector(".btn");
const joketag = document.querySelector(".joke");

btn.addEventListener("click", GenerateJokes);

async function GenerateJokes() {
  btn.disabled = true;
  btn.innerText = "Loading...";
  try {
    const res = await fetch("https://icanhazdadjoke.com", {
      headers: {
        Accept: "application/json",
      },
    });
    const data = await res.json();
    joketag.innerText = data.joke;
  } catch (error) {
    console.log(error);
  }
  btn.disabled = false;
  btn.innerText = "Another Jokes";
}

GenerateJokes();
