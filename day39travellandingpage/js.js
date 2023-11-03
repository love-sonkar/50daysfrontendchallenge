const ham = document.querySelector(".ham");
const header = document.querySelector(".header");
const mobilenav = document.querySelector(".mobilenav");
const date = document.querySelector(".date");

ham.addEventListener("click", () => {
  header.classList.toggle("headerborder");
  header.classList.toggle("ani");
  mobilenav.classList.toggle("navheight");
});

// footer year
const newDate = new Date().getFullYear();
date.innerHTML = newDate;

// contact form

const form = document.querySelector(".contact__form");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const nameVal = e.target.elements[0].value;
  const emailVal = e.target.elements[1].value;
  const messageVal = e.target.elements[2].value;
  if (!nameVal || !emailVal || !messageVal) {
    return Toastify({
      text: "Please fill all Field's",
      position: "center",
      duration: 3000,
      style: {
        background: "#000000",
      },
    }).showToast();
  }
  Toastify({
    text: "Thankyou for Conecting us",
    position: "center",
    duration: 3000,
    style: {
      background: "#ffffff",
      color: "#000000",
    },
  }).showToast();

  e.target.elements[0].value = "";
  e.target.elements[1].value = "";
  e.target.elements[2].value = "";
});

// go to top button

const gototopbtn = document.querySelector(".go__to__top");
let timeout;
window.onscroll = () => {
  if (window.scrollY) {
    gototopbtn.style.right = "20px";
  clearTimeout(timeout)
} else{
  gototopbtn.style.right = "-144px";
}
timeout= setTimeout(() => {
  gototopbtn.style.right = "-144px";
}, 2000);
};

gototopbtn.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: "smooth",
  });
});
