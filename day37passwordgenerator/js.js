const btn = document.querySelector(".btn");
const showpass = document.querySelector(".showpass");
const number = document.querySelector(".number");
const range = document.querySelector(".range");
const labelrange = document.querySelector(".labelrange");


let passlength = 5;

range.addEventListener("click",(e)=>{
    passlength = e.target.value
    PasswordGenerator()
    lebelrangeText()
})

function lebelrangeText (){
    labelrange.innerHTML = passlength;
}

lebelrangeText()

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
  for (let i = 1; i <= passlength; i++) {
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


PasswordGenerator()