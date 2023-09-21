const imageList = [
  {
    name: "home",
    value:
      "https://images.unsplash.com/photo-1600009710631-5baaaaf50754?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGhvbWUlMjBwYWdlfGVufDB8fDB8fHww&auto=format&fit=crop&w=400&q=60",
  },
  {
    name: "about",
    value:
      "https://plus.unsplash.com/premium_photo-1661602409016-19db4768fb54?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzF8fGhvbWUlMjBwYWdlfGVufDB8fDB8fHww&auto=format&fit=crop&w=400&q=60",
  },
  {
    name: "contact",
    value:
      "https://plus.unsplash.com/premium_photo-1661601769748-dabdde881905?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjV8fGhvbWUlMjBwYWdlfGVufDB8fDB8fHww&auto=format&fit=crop&w=400&q=60",
  },
  {
    name: "service",
    value:
      "https://plus.unsplash.com/premium_photo-1661598502016-bebe6b090644?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGhvbWUlMjBwYWdlfGVufDB8fDB8fHww&auto=format&fit=crop&w=400&q=60",
  },
];

const imgtag = document.querySelector(".imagesrc");

imgtag.setAttribute("src", imageList[0].value);

const getli = document.getElementsByTagName("li");

[...getli].map((item) => {
  item.addEventListener("click", () => {
    const datavalue = item.getAttribute("data-value");
    const imagevalue = imageList.filter((src)=>src.name === datavalue && src );
    imgtag.setAttribute("src",imagevalue[0].value)
});
});
