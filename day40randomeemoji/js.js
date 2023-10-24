const RandomeEmoji = [
  "😊",
  "🤣",
  "😂",
  "😘",
  "👌",
  "😒",
  "✌️",
  "😁",
  "😉",
  "🥰",
  "😏",
  "😣",
  "😝",
  "😜",
  "😛",
  "😬",
  "🤯",
  "🤪",
  "😵",
  "🤢",
  "🥴",
  "😵‍💫",
];

const card = document.querySelector(".card");
card.addEventListener("click", (e) => {
  const GenerateEmoji =
    RandomeEmoji[Math.floor(Math.random() * RandomeEmoji.length)];
  const x = e.pageX - e.currentTarget.offsetLeft;
  const y = e.pageY - e.currentTarget.offsetTop;

  let span = document.createElement("span");
  span.style.top = y - 40 + "px";
  span.style.left = x - 30 + "px";
  span.innerHTML = GenerateEmoji;
  card.appendChild(span);
  setTimeout(() => {
    card.removeChild(span);
  }, 1000);
});
