console.log("hi")
const Imge=document.querySelector(".bgImg");
const btn=document.querySelector(".btn");
const btn2=document.querySelector(".btn2");


btn.addEventListener("click",()=>{

  Imge.style.filter = "blur(0)";
})


btn2.addEventListener("click",()=>{

  Imge.style.filter = "blur(100px)";
})