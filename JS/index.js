const button = document.querySelector("button");

button.addEventListener('click', () => {
   let a = window.location.href = "page01.html";
   window.open(a, '_blank');
});