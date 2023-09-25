const btn = document.querySelector(".btn");
const joketag = document.querySelector(".joke");

btn.addEventListener("click", GenerateJokes());

async function GenerateJokes() {
  try {
    btn.setAttribute("disabled",true)
    const res = await fetch("https://icanhazdadjoke.com");
    const data = await res.json();
    joketag.innerText = data.joke;
    btn.setAttribute("disabled",false)

  } catch (error) {
    console.log(error);
  }
  btn.setAttribute("disabled",false)

}

GenerateJokes();
