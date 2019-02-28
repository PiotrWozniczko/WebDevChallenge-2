const nav = document.querySelector('.nav');
nav.style.height = '3.5em';
const showMenu = () => {
    nav.style.backgroundColor = 'rgba(255, 255, 255, 1)';
    nav.style.height = '19em';
};

const hideMenu = () => {
    nav.style.backgroundColor = 'rgba(255, 255, 255, 0.9)';
    nav.style.height = '3.5em';
};

const toggleMenu = document.querySelector('.toggle-menu');
    toggleMenu.addEventListener('click', function(e){
    e.preventDefault();
    nav.style.height == '3.5em' ? showMenu() : hideMenu(); // jshint ignore:line
});

const menuItems = document.querySelectorAll('.menu-item');
for (let item of menuItems) {
    item.addEventListener('click', hideMenu);
}

const loadYear = () => {
      const dateNow = new Date();
      document.getElementById('date').innerHTML = dateNow.getFullYear();
};
window.onload = loadYear;