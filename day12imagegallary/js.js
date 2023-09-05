const Images = [
  "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8dGVjaHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=400&q=60",
  "https://images.unsplash.com/photo-1496096265110-f83ad7f96608?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fHRlY2h8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=400&q=60",
  "https://plus.unsplash.com/premium_photo-1676998930980-fc6d4922c0b7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fHRlY2h8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=400&q=60",
  "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjJ8fHRlY2h8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=400&q=60",
  "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjh8fHRlY2h8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=400&q=60",
  "https://images.unsplash.com/photo-1515343480029-43cdfe6b6aae?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjl8fHRlY2h8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=400&q=60",
  "https://images.unsplash.com/photo-1512756290469-ec264b7fbf87?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzN8fHRlY2h8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=400&q=60",
  "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mzl8fHRlY2h8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=400&q=60",
  "https://plus.unsplash.com/premium_photo-1678566111481-8e275550b700?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDl8fHRlY2h8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=400&q=60",
];

const imageContainer = document.querySelector(".image-container ");

const data = Images.forEach((url) => {
  const imagedata = `<div class="image-wrapper"><img src=${url} class="image" alt=${url}></div>`;
  imageContainer.innerHTML +=imagedata
});
