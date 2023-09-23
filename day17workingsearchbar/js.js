let user = [];

const imageData = [
  "https://images.unsplash.com/photo-1474447976065-67d23accb1e3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHByb2ZpbGV8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=400&q=60",
  "https://plus.unsplash.com/premium_photo-1675034393381-7e246fc40755?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fHByb2ZpbGV8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=400&q=60",
  "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cHJvZmlsZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=400&q=60",
  "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjF8fHByb2ZpbGV8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=400&q=60",
  "https://images.unsplash.com/photo-1455274111113-575d080ce8cd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjl8fHByb2ZpbGV8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=400&q=60",
];

const fetchFunction = async () => {
  try {
    let dataget = await fetch("https://jsonplaceholder.typicode.com/users");
    let json = await dataget.json();
    displaynewdata(json);
    user = json;
  } catch (error) {
    console.log(error);
  }
};

fetchFunction();

const displaynewdata = (data) => {
  const cardBody = document.querySelector(".card-body");
  if (data.length == 0) {
    return (cardBody.innerHTML = `<h2 class="msg">No User Found</h2>`);
  }
  const mapdata = data.forEach((item) => {
    const randomNumber = Math.floor(Math.random() * imageData.length);
    return `<div class="card-item"><div class="profile"><img src="${imageData[randomNumber]}" alt="${item.name}" /></div><div class="detail"><h2 class="heading">${item.name}</h2><p class="sub-heading">${item.email}</p><p class="address">${item.company.catchPhrase}</p></div></div>`;
  });
  cardBody.innerHTML = mapdata;
};

const input = document.querySelector(".input");

input.addEventListener("keyup", SearchUser);

function SearchUser() {
  let lowercase = input.value.toLowerCase();
  const searchfilter = user.filter((item) => {
    const itemname = item.name.toLowerCase();
    if (itemname.includes(lowercase)) return item;
  });
  displaynewdata(searchfilter);
}
