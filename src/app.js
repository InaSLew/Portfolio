const hamburgerBtn = document.getElementById('hamburger');
const navList = document.getElementById("nav-list");

const toggleBtn = () => navList.classList.toggle('show');

hamburgerBtn.addEventListener('click', toggleBtn);
