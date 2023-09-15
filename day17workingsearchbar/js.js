let data = [];

const fetchFunction = async () => {
  try {
    let dataget = await fetch("https://jsonplaceholder.typicode.com/users");
    let json = await dataget.json();
    data = json;
    displaynewdata();
    console.log(data);
  } catch (error) {
    console.log(error);
  }
};

fetchFunction();

const displaynewdata = () => {
  const cardBody = document.querySelector(".card-body");

  data.forEach((item) => {
    const i = `<div class="card-item">
<div class="profile">
  <img
    src="https://images.pexels.com/photos/2726111/pexels-photo-2726111.jpeg?auto=compress&cs=tinysrgb&w=400"
    alt=""
  />
  </div>
  <div class="detail">
  <h2 class="heading">${item.name}</h2>
  <p class="sub-heading">${item.email}</p>
  <p class="address">${item.company.catchPhrase}</p>
  </div>
  </div>`;

    cardBody.innerHTML += i;
  });
};
