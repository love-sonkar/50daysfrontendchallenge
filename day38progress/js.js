const nextbutton = document.querySelector(".nextbutton");
const prevbutton = document.querySelector(".prevbutton");
const line = document.querySelector(".line");

let count = 1;

nextbutton.addEventListener("click", () => {
    CountIncrease()
  if (count == 2) {
    line.style.right = "62%";
  } else if (count == 3) {
    line.style.right = "35%";
  } else if (count == 4) {
    line.style.right = "0%";
  } 



});

prevbutton.addEventListener("click", () => {
    CountDecrease()
  if (count == 3) {
    line.style.right = "35%";
  } else if (count == 2) {
    line.style.right = "62%";
  } else if (count == 1) {
    line.style.right = "100%";
  } 

  

});

function CountIncrease(){
    count++
    if(count >= 4){
        count = 4
    }
}
function CountDecrease(){
    count--
    if(count <=1){
        count = 1
    }
}