const innderDivs = document.querySelectorAll(".inner_div");
const choice = document.querySelector(".choice");
const heading = document.querySelector(".heading_tag");
const footer = document.querySelector(".footer_tag");

innderDivs.forEach((item) => {
  item.addEventListener("click", () => {
    const divitem = item;
    heading.innerText = "Thankyou For your Feedback!";
    choice.innerHTML = "";
    choice.append(divitem);
    const getattr = item.getAttribute("data-value");
    switch (getattr) {
      case "Happy":
        footer.innerText = "Thankyou we love it";
        break;
      case "Not":
        footer.innerText = "why you choose this";
        break;
      case "Bad":
        footer.innerText = "Why Bad can you suggest me somthing to improve";
    }
  });
});
