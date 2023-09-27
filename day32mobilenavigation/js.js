const hamopen = document.querySelector(".hammenu");
const hamclose = document.querySelector(".close");

const navigation = document.querySelector(".navigation");
const nav2 = document.querySelector(".nav2");
const nav = document.querySelector(".nav");



hamopen.addEventListener("click",()=>{
    navigation.classList.add("show")
    nav2.classList.add("show")
    nav.classList.add("show")

})


hamclose.addEventListener("click",()=>{
    navigation.classList.remove("show")
    nav2.classList.remove("show")
    nav.classList.remove("show")

})