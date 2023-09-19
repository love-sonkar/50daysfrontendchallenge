const card = document.querySelector(".card");
card.addEventListener("click", (e) => {
  var rect = e.target.getBoundingClientRect();
  const x = e.pageX - e.currentTarget.offsetLeft;
  const y = e.pageY - e.currentTarget.offsetTop;

  let span = document.createElement("span");
  span.style.top = y + "px";
  span.style.left = x + "px";
  card.appendChild(span);
  setTimeout(() => {
    card.removeChild(span);
  }, 1000);
});
