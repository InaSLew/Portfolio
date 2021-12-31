// Hamburger menu reference and its callabck function
const hamburgerBtn = document.getElementById('hamburger');
const navList = document.getElementById("nav-list");
const toggleBtn = () => navList.classList.toggle('show');

// Project card detail
const targetCards = document.getElementsByClassName('project-card');
const toggleCardDetail = (index, element) => {
    const targetCard = document.getElementsByClassName('project-card')[index];
    const targetDetail = targetCard.getElementsByClassName('project-card-detail')[0];
    targetCard.classList.toggle('expand');
    targetDetail.classList.toggle('show');
}

// Adding EventListeners
hamburgerBtn.addEventListener('click', toggleBtn);

for (let index = 0; index < targetCards.length; index++) {
    const element = targetCards[index];
    element.addEventListener('click', () => toggleCardDetail(index, element));
}
