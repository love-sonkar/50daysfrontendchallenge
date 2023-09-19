const main = document.querySelector('.main');
const dark_toggle =document.querySelector(".dark_toggle")
const round_toggle = document.querySelector(".round");
const toggle =document.querySelector(".toggle")


dark_toggle.addEventListener("click",()=>{
round_toggle.classList.toggle("active")
main.classList.toggle("darkmode")
toggle.classList.toggle("lightmode")
})

