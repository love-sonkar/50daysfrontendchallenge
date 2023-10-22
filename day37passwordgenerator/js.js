const btn = document.querySelector(".btn");
const reset = document.querySelector(".reset");

const showpass = document.querySelector(".showpass");
const checkToggles = document.querySelectorAll(".checkToggle");
const range = document.querySelector(".range");
const labelrange = document.querySelector(".labelrange");
const number = document.querySelector("#number");
const capital = document.querySelector("#capitalLetter")
const special = document.querySelector("#specialLetter")

const CopyBtn = document.querySelector(".copy");
CopyBtn.addEventListener("click",()=>{
navigator.clipboard.writeText(showpass.value);
const MainContainer = document.querySelector(".toastHandler");
const ToastDiv = document.createElement("div");
ToastDiv.classList.add("toastNoti");
ToastDiv.innerHTML = `<h2>You Copied</h2>
<p style="font-size:1.2rem;">${showpass.value}</p>`

MainContainer.append(ToastDiv);

setTimeout(() => {
  ToastDiv.remove();
}, 1500);

})

let passlength = 5;

range.addEventListener("click", (e) => {
  passlength = e.target.value;
  PasswordGenerator();
  lebelrangeText();
});

function lebelrangeText() {
  labelrange.innerHTML = passlength;
}

lebelrangeText();

btn.addEventListener("click", PasswordGenerator);
reset.addEventListener("click", PasswordGenerator);


function PasswordGenerator() {
  let orignalPss = "";
  let alphabets = "abcdefghijklmnopqrstuvwxyz";
  let CapitalLetter = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  let SpecialChar = "!@#$%^&*()_+~`|}{[]:;?><,./-=";
  let numbers = "0123456789";
  let genpass = "";
  if (number.getAttribute("data-number") == "true") {
    genpass += numbers;
  }
  if (capital.getAttribute("data-number") == "true") {
    genpass += CapitalLetter;
  }
  if (special.getAttribute("data-number") == "true") {
    genpass += SpecialChar;
  }

  genpass += alphabets;
  for (let i = 1; i <= passlength; i++) {
    let randomenumber = Math.floor(Math.random() * genpass.length);
    orignalPss += genpass.charAt(randomenumber);
  }
  showpass.setAttribute("value", orignalPss);
  genpass = "";
}
checkToggles.forEach((Toggle) => {
  Toggle.addEventListener("click", () => {
    Toggle.children[0].classList.toggle("trueToggle");
    const getattr = Toggle.getAttribute("data-number");
    if (getattr == "true") {
      Toggle.setAttribute("data-number", false);
    } else {
      Toggle.setAttribute("data-number", true);
    }
  });
});

PasswordGenerator();
