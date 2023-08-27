const image = document.querySelector(".image");
const title = document.querySelector(".title");
const para = document.querySelector(".para");

setTimeout(Contentshow, 3000);
function Contentshow() {
  image.setAttribute(
    "src",
    "https://images.unsplash.com/photo-1692528131755-d4e366b2adf0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw3fHx8ZW58MHx8fHx8&auto=format&fit=crop&w=400&q=60"
  );

  title.innerText = "Card design for website";

  para.innerText =
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Utperferendis quis illum cumque atque!";

  image.classList.add("ani");
  title.classList.add("ani");
  para.classList.add("ani");
}
