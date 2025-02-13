// author: ChiKienLuu

const topMenu = document.getElementById('ct-top-menu');
const toggleTopMenuIcon = document.getElementById('ct-toggle-top-menu-icon');

document.addEventListener('click', (e) => {
  if (toggleTopMenuIcon.contains(e.target)) {
    //Click on toggleTopMenuIcon
    topMenu.classList.toggle('hidden'); 
  } else {
    //Click outside toggleTopMenuIcon
  }
});