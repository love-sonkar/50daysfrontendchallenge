const text = document.querySelector(".text");
const btn = document.querySelector(".btn");

let endnumber = 500;

btn.addEventListener("click", () => {
  text.innerHTML = 00;
  shownumber(1);
});

function shownumber(num) {
  if (num == endnumber) {
    return;
  } else {
    setTimeout(() => {
      let increment = ++num;
      text.innerHTML = increment;
      shownumber(increment);
    }, 0.1);
  }
}

shownumber(1);
