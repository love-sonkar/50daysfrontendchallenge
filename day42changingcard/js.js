const data = [
  {
    textContent:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex repellat necessitatibus rem voluptatibus temporibus cumque veniam",
  },
  {
    textContent:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam magni molestiae minima amet. Quidem eveniet dolores quia labore laboriosam error!",
  },
  {
    textContent:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium voluptate maxime facere?",
  },
  {
    textContent:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis illum non, dolor esse vel in!",
  },
];

const text = document.querySelector(".textcontent");

let i = 0;

function GenerateRandomeContent() {
  i++;
  if (i >= data.length) {
    i = 0;
  }
  text.innerHTML = data[i].textContent;
}

setInterval(() => {
  GenerateRandomeContent();
}, 2000);
