const btn = document.querySelector(".btn");
const showpass = document.querySelector(".showpass");
const number = document.querySelector(".number");

btn.addEventListener("click", PasswordGenerator);

function PasswordGenerator() {
  let orignalPss = "";
  let alphabets = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
  let numbers = "0123456789";
  let genpass = "";
  if (NumberTrueFalseCheck() == "true") {
    genpass += numbers;
  }

  genpass += alphabets;
  for (let i = 0; i <= 7; i++) {
    let randomenumber = Math.floor(Math.random() * genpass.length);
    orignalPss += genpass.charAt(randomenumber);
  }
  showpass.innerHTML = orignalPss;
  genpass = "";
}

number.addEventListener("click", () => {
  const getattr = NumberTrueFalseCheck();
  if (getattr == "true") {
    number.setAttribute("data-number", false);
  } else {
    number.setAttribute("data-number", true);
  }
});

function NumberTrueFalseCheck() {
  return number.getAttribute("data-number");
}
