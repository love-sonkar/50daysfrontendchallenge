const Imge = document.querySelector(".bgImg");
const input = document.querySelector(".inputval");
const pass = document.querySelector(".pass");

input.focus();

input.addEventListener("input", (e) => {
  const value = e.target.value;
  let alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  let number = "1234567890";
  let specialchr = "!@#$%^&*()_+";
  pass.innerHTML = "Weak";
  Imge.style.filter = "blur(100px)"

  for (let i = 0; i <= value.length; i++) {
    console.log(value[i])
    if (value.includes(alphabet[i])) {
      if(value.includes(number[i])){
        pass.innerHTML = "Medium";
        Imge.style.filter = "blur(50px)"
      }
    } 
    else if (value.includes(specialchr[i])) {
      pass.innerHTML = "Strong";
      Imge.style.filter = "blur(0)"

    }
  }
});
