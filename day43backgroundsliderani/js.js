const upbtn = document.querySelector(".up");
const downbtn = document.querySelector(".down");
const rightimg = document.querySelector(".rightimg");
const leftimg = document.querySelector(".leftimg");

const listOfImages = [
  "https://images.pexels.com/photos/16933826/pexels-photo-16933826/free-photo-of-black-and-white-shot-of-a-vintage-car-on-a-tropical-town-street.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load",
  "https://images.pexels.com/photos/18254694/pexels-photo-18254694/free-photo-of-man-with-suitcase-in-front-of-modern-building-in-baku-in-black-and-white.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load",
  "https://images.pexels.com/photos/18687546/pexels-photo-18687546/free-photo-of-a-green-surfboard-on-a-wooden-pier-overlooking-the-ocean.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load",
  "https://images.pexels.com/photos/10444576/pexels-photo-10444576.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load",
  "https://images.pexels.com/photos/12142716/pexels-photo-12142716.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load",
  "https://images.pexels.com/photos/15509517/pexels-photo-15509517/free-photo-of-skyscraper-towering-over-crowd-on-street-in-downtown.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load"
]

function ImageSrc(i){
  if(i > listOfImages.length-1){
    i =0
  } 
  else if(i <0){
    i=listOfImages.length-1
  }
  return i
}

function GenerateRandom (){
  return Math.floor(Math.random() * listOfImages.length)
}

upbtn.addEventListener("click", () => {
  upbtn.setAttribute("disabled",true)
  rightimg.classList.add("upclass");
  leftimg.classList.add("downclass","ani");
  setTimeout(() => {
    leftimg.setAttribute("src",listOfImages[ImageSrc(GenerateRandom())])
    rightimg.setAttribute("src",listOfImages[ImageSrc(GenerateRandom())])
    
    rightimg.classList.remove("upclass");
    leftimg.classList.remove("downclass");
    upbtn.removeAttribute("disabled")
  
  }, 1000);

});
downbtn.addEventListener("click", () => {
  downbtn.setAttribute("disabled",true)

  rightimg.classList.add("downclass");
  leftimg.classList.add("upclass");
  setTimeout(() => {
    leftimg.setAttribute("src",listOfImages[ImageSrc(GenerateRandom())])
    rightimg.setAttribute("src",listOfImages[ImageSrc(GenerateRandom())])
    rightimg.classList.remove("downclass");
    leftimg.classList.remove("upclass");
    downbtn.removeAttribute("disabled")

  }, 1000);
});
