const Imge = document.querySelector(".bgImg");
const input = document.querySelector(".inputval");
const pass = document.querySelector(".pass");

input.focus();

input.addEventListener("input", (e) => {
  const value = e.target.value;
  let alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  let number = "1234567890";
  pass.innerHTML = "Weak";

  for (let i = 0; i < value.length; i++) {
    if (alphabet.includes(value[i])) {
      pass.innerHTML = "Medium";
    } else if (number.includes(value[i])) {
      if (value.includes(alphabet)) {
        pass.innerHTML = "Strong";
      }
    }
  }
});
