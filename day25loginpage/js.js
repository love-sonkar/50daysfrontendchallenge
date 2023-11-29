const form = document.querySelector(".form");
const username = document.querySelector("#username");
const email = document.querySelector("#email");
const password = document.querySelector("#password");

const errorObj = {
     usernameError : document.querySelector(".usernameError"),
     emailError : document.querySelector(".emailError"),
     passwordError: document.querySelector(".passwordError"),
}

form.addEventListener("submit",(e)=>{
    e.preventDefault()
    const {usernameError,emailError,passwordError} = errorObj;
   const usernameValue = username.value;
   const emailValue =email.value;
   const passwordValue = password.value;

   if( usernameValue.length < 4){
     usernameError.innerHTML = "Username Must be 4 character";
   }else{
     usernameError.innerHTML = ""
   }
   if(!emailValue){
    emailError.innerHTML = "Please Enter Your Email";
   }else{
    const emailRegex = 'com' 
    if(emailRegex.includes(emailValue)){
        emailError.innerHTML=""
    }
    emailError.innerHTML = "not valid email"
   }

})
