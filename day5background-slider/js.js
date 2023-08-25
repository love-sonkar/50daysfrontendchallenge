const ImageArray = [
  "https://images.unsplash.com/photo-1691832566409-b2d9705c822a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyfHx8ZW58MHx8fHx8&auto=format&fit=crop&w=400&q=60",
  "https://images.unsplash.com/photo-1683009427666-340595e57e43?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHw2fHx8ZW58MHx8fHx8&auto=format&fit=crop&w=400&q=60",
  "https://images.unsplash.com/photo-1682685797507-d44d838b0ac7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxfHx8ZW58MHx8fHx8&auto=format&fit=crop&w=400&q=60",
  "https://plus.unsplash.com/premium_photo-1690574169344-48f431816db6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyM3x8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=60",
  "https://images.unsplash.com/photo-1682685797741-f0213d24418c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHw0M3x8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=60",
  "https://images.unsplash.com/photo-1682687218147-9806132dc697?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHw1OHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=60",
  "https://images.unsplash.com/photo-1666427619107-01b046609a05?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw5fHx8ZW58MHx8fHx8&auto=format&fit=crop&w=400&q=60",
];
let id = 0;
let ImageLenght = ImageArray.length - 1;

function setImageSrc(num) {
  const Imagesrc = document.querySelector(".image");
  Imagesrc.setAttribute("src", ImageArray[`${num}`]);
  Imagesrc.classList.add("ani");
  setTimeout(function () {
    Imagesrc.classList.remove("ani");
  }, 300);
}
setImageSrc(id);

const leftbutton = document.querySelector(".left-button");
const rightbutton = document.querySelector(".right-button");

eventlistner(leftbutton);
eventlistner(rightbutton);

function eventlistner(path) {
  path.addEventListener("click", () => {
    if (path == leftbutton) {
      id--;
      if (id < 0) {
        id = ImageLenght;
      }

      setImageSrc(id);
    }
    if (path == rightbutton) {
      id++;
      if (id > ImageLenght) {
        id = 0;
      }
      setImageSrc(id);
    }

    path.classList.add("buttonani");

    setTimeout(function () {
      path.classList.remove("buttonani");
    }, 300);
  });
}
