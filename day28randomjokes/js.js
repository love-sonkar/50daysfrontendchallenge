const btn = document.querySelector(".btn");
const joke = document.querySelector(".joke");

const jokes = ["success", "error", "alert"];


const RandomNumber=()=>{
return Math.floor(Math.random()*jokes.length)
}

btn.addEventListener('click',()=>{
  joke.innerText = jokes[RandomNumber()]
})