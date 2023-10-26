const data = [
  {
    textContent: "Genius is one percent inspiration and ninety-nine percent perspiration.",
    authorContent: "Author : Thomas Edison"
  },
  {
    textContent: "You can observe a lot just by watching.",
    authorContent: "Author : Yogi Berra"
  },
  {
    textContent: "A house divided against itself cannot stand.",
    authorContent: "Author : Abraham Lincoln"
  },
  {
    textContent: "Difficulties increase the nearer we get to the goal.",
    authorContent: "Author : Johann Wolfgang von Goethe"
  },
  {
    textContent: "Fate is in your hands and no one elses",
    authorContent: "Author : Byron Pulsifer"
  },
  {
    textContent: "Be the chief but never the lord.",
    authorContent: "Author : Lao Tzu"
  },
  {
    textContent: "Nothing happens unless first we dream.",
    authorContent: "Author : Carl Sandburg"
  },
  {
    textContent: "Well begun is half done.",
    authorContent: "Author : Aristotle"
  },
  {
    textContent: "Life is a learning experience, only if you learn.",
    authorContent: "Author : Yogi Berra"
  },
  {
    textContent: "Self-complacency is fatal to progress.",
    authorContent: "Author : Margaret Sangster"
  },
];

const text = document.querySelector(".textcontent");
const author = document.querySelector(".author");


let i = 0;

function GenerateRandomeContent() {
  i++;
  if (i >= data.length) {
    i = 0;
  }
  text.innerHTML = data[i].textContent;
  author.innerHTML = data[i].authorContent;
}

setInterval(() => {
  GenerateRandomeContent();
}, 2000);
