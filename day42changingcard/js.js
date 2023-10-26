const data = [
  {
    textContent: "Genius is one percent inspiration and ninety-nine percent perspiration.",
    authorContent: "Thomas Edison"
  },
  {
    textContent: "You can observe a lot just by watching.",
    authorContent: "Yogi Berra"
  },
  {
    textContent: "A house divided against itself cannot stand.",
    authorContent: "Abraham Lincoln"
  },
  {
    textContent: "Difficulties increase the nearer we get to the goal.",
    authorContent: "Johann Wolfgang von Goethe"
  },
  {
    textContent: "Fate is in your hands and no one elses",
    authorContent: "Byron Pulsifer"
  },
  {
    textContent: "Be the chief but never the lord.",
    authorContent: "Lao Tzu"
  },
  {
    textContent: "Nothing happens unless first we dream.",
    authorContent: "Carl Sandburg"
  },
  {
    textContent: "Well begun is half done.",
    authorContent: "Aristotle"
  },
  {
    textContent: "Life is a learning experience, only if you learn.",
    authorContent: "Yogi Berra"
  },
  {
    textContent: "Self-complacency is fatal to progress.",
    authorContent: "Margaret Sangster"
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
