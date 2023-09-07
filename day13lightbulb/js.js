const btn = document.querySelector(".btn");

const bulb = document.querySelector(".bulb");

btn.addEventListener("click", () => {
  bulb.classList.toggle("on");
  if (btn.innerText == "On") {
    btn.innerText = "Off";
  } else {
    btn.innerText = "On";
  }
});
