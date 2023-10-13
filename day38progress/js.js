const nextbutton = document.querySelector(".nextbutton");
const prevbutton = document.querySelector(".prevbutton");
const line = document.querySelector(".line");
const item2 = document.querySelector(".item2")
const item3 = document.querySelector(".item3")
const item4 = document.querySelector(".item4")


let count = 1;

nextbutton.addEventListener("click", () => {
  CountIncrease();
  if (count == 2) {
    line.style.right = "62%";
    item2.classList.add("active")
  } else if (count == 3) {
    line.style.right = "35%";
    item3.classList.add("active")
  } else if (count == 4) {
    line.style.right = "0%";
    item4.classList.add("active")
  }
});

prevbutton.addEventListener("click", () => {
  CountDecrease();
  if (count == 3) {
    line.style.right = "35%";
    item4.classList.remove("active")
  } else if (count == 2) {
    line.style.right = "62%";
    item3.classList.remove("active")
  } else if (count == 1) {
    line.style.right = "100%";
    item2.classList.remove("active")
  }
});

function CountIncrease() {
  count++;
  if (count >= 4) {
    count = 4;
  }
  console.log(count)
}
function CountDecrease() {
  count--;
  if (count <= 1) {
    count = 1;
  }
  console.log(count)
}
