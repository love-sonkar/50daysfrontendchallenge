const btn = document.querySelector(".btn");
const toast = document.querySelector(".toast");

const color = [
  {
    name: "success",
    icon: `<span class="material-symbols-outlined">
done
</span>`,
  },
  {
    name: "error",
    icon: `<span class="material-symbols-outlined">
error
</span>`,
  },
  {
    name: "alert",
    icon: `<span class="material-symbols-outlined">
info
</span>`,
  },
];

const Generaterandom = () => {
  return Math.floor(Math.random() * color.length);
};

btn.addEventListener("click", () => {
  const generateClass = color[Generaterandom()];

  const notification = document.createElement("div");
  notification.classList.add("cover");
  notification.classList.add(generateClass.name);

  console.log(generateClass);

  notification.innerHTML =
    generateClass.icon + generateClass.name + " Notification";

  toast.append(notification);

  setTimeout(() => {
    notification.remove();
  }, 1500);
});
