const btn = document.querySelector(".btn");
const toast = document.querySelector(".toast");

const color = ["success","error","alert"]

const Generaterandom = ()=>{
  return Math.floor(Math.random()*color.length);
}

btn.addEventListener("click", () => {
  const notification = document.createElement("div");
  notification.classList.add("cover");
  notification.classList.add(color[Generaterandom()])
  notification.innerText = "This is Notification";

  toast.append(notification);

  setTimeout(() => {
    notification.remove();
  }, 1000);
});
