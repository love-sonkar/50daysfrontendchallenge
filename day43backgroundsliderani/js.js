const upbtn = document.querySelector(".up");
const downbtn = document.querySelector(".down");
const rightimg = document.querySelector(".rightimg");
const leftimg = document.querySelector(".leftimg");

upbtn.addEventListener("click", () => {
  rightimg.classList.add("upclass");
  leftimg.classList.add("downclass");
  setTimeout(() => {
    rightimg.classList.remove("upclass");
    leftimg.classList.remove("downclass");
  }, 1000);
});
downbtn.addEventListener("click", () => {
    rightimg.classList.add("downclass");
  leftimg.classList.add("upclass");
  setTimeout(() => {
    rightimg.classList.remove("downclass");
    leftimg.classList.remove("upclass");
  }, 1000);
});
