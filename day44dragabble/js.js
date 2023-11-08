const containers = document.querySelectorAll(".container");

function dragItem() {
  const dragitems = document.querySelectorAll(".item");
  dragitems.forEach((items) => {
    items.addEventListener("dragstart", () => {
      items.classList.add("drag");
    });
    items.addEventListener("dragend", () => {
      items.classList.remove("drag");
    });
  });
}
containers.forEach((container) => {
  container.addEventListener("dragover", (e) => {
    e.preventDefault();
    const getItem = document.querySelector(".drag");
    container.appendChild(getItem);
  });
});

const form = document.querySelector("form");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const inputval = e.target.children[0].value;
  if (!inputval) {
    return alert("add one");
  }
const div1 = document.querySelector(".div1");

  let pelement = document.createElement("p");
  pelement.classList.add("item");
  pelement.setAttribute("draggable", true);
  pelement.innerText = inputval;
  div1.append(pelement);
  dragItem();
  e.target.children[0].value = ""
});


