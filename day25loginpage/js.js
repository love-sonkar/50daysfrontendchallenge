const form = document.querySelector(".form");
const username = document.querySelector("#username");
const email = document.querySelector("#email");
const password = document.querySelector("#password");

const errorObj = {
  usernameError: document.querySelector(".usernameError"),
  emailError: document.querySelector(".emailError"),
  passwordError: document.querySelector(".passwordError"),
};

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const { usernameError, emailError, passwordError } = errorObj;
  const usernameValue = username.value;
  const emailValue = email.value;
  const passwordValue = password.value;

  //username validation
  if (!usernameValue) {
    usernameError.innerHTML = "Please Enter Username";
  } else {
    if (usernameValue.length < 4) {
      usernameError.innerHTML = "Username Must be 4 character";
    } else {
      usernameError.innerHTML = "";
    }
  }

  // email validation
  if (!emailValue) {
    emailError.innerHTML = "Please Enter Your Email";
  } else {
    const emailRegex = ".com";
    if (emailValue.match(emailRegex)) {
      emailError.innerHTML = "";
    } else {
      emailError.innerHTML = "not valid email";
    }
  }

  // password validation
  if (!passwordValue) {
    passwordError.innerHTML = "Enter Your password";
  }else{
    if(passwordValue.length < 4){
    passwordError.innerHTML = "Password lenght must be 4";
    }else{
    passwordError.innerHTML = "";
    }
  }

  if(usernameError.innerHTML === "" && passwordError.innerHTML === ""&& emailError.innerHTML === ""){
      console.log(usernameValue,emailValue,passwordValue)
      // e.currentTarget.submit(); // for submit form
      location.reload()
  }

});
