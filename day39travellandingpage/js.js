const ham = document.querySelector(".ham")
const header = document.querySelector(".header")
const mobilenav =document.querySelector(".mobilenav");
const date =document.querySelector(".date");


ham.addEventListener("click",()=>{
    header.classList.toggle("headerborder")
    header.classList.toggle("ani")
    mobilenav.classList.toggle("navheight")
})

// footer year
const newDate = new Date().getFullYear();
date.innerHTML = newDate;

// contact form 

const form = document.querySelector(".contact__form");

form.addEventListener("submit",(e)=>{
    e.preventDefault()
    alert("form submited")
})