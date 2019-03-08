// pobieram nav i ustawiam wysokosc schowanego menu
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
// pobieram hamburgera
const toggleMenu = document.querySelector('.toggle-menu');

// ustawiam haburgera na klik
toggleMenu.addEventListener('click', function(e){
    e.preventDefault();
    nav.style.height == '3.5em' ? showMenu() : hideMenu(); // jshint ignore:line
});

// chowam menu po kliknieciu w jedna z opcji
const menuItems = document.querySelectorAll('.menu-item');
for (let item of menuItems) {
    item.addEventListener('click', hideMenu);
}



// rok do stopki
const loadYear = () => {
      const dateNow = new Date();
      document.getElementById('date').innerHTML = dateNow.getFullYear();
};
window.onload = loadYear;



// gallery modal
const galleryModal = document.querySelector('.gallery-modal');

const showModal = () => {
    galleryModal.style.display = 'block';
};

const hideModal = () => {
    galleryModal.style.display = 'none';
};

const galleryButton = document.querySelector('.gallery-button');
galleryButton.addEventListener('click', showModal);

const closeModal = document.querySelector('.close');
closeModal.addEventListener('click', hideModal);

// klik gdziekolwiek na tlo chowa modal
window.addEventListener('click', function(e){
   if (e.target == galleryModal) hideModal();
});



// pobieram liste zdjec
const images = [
    'img/gallery1.jpg',
    'img/gallery2.jpg',
    'img/gallery3.jpg',
    'img/gallery4.jpg',
    'img/gallery5.jpg'
];

//  ustawiam licznik na zero i ustawiam img ze strony jako slide
let currentImage = 0;
const slide = document.querySelector('.slide');

// funkcja przesuwajaca nastepne zdjecie
const nextSlide = () => {
    currentImage < images.length - 1 ? currentImage++ : currentImage = 0;
    slide.src = images[currentImage];
};
const next = document.querySelector('.next');
next.addEventListener('click', nextSlide);

// funkcja przesuwajaca poprzednie zdjecie
const prevSlide = () => {
    currentImage > 0 ? currentImage-- : currentImage = images.length - 1;
    slide.src = images[currentImage];
};
const prev = document.querySelector('.prev');
prev.addEventListener('click', prevSlide);

// tworze fragment zeby edytowac DOM tylko raz
const fragment = document.createDocumentFragment();

// uzywajac petli na tablicy ze zdjeciami dodaje tyle kropek ile slajdow
images.forEach((item, index) => {
    const dot = document.createElement('span');
    dot.classList.add('dot');
    fragment.appendChild(dot);
});

// pobieram diva, do ktorego wrzucam kropki
const dots = document.querySelector('.dots');
dots.appendChild(fragment);

// petla dodajaca klika na kazda kropke przypisujaca odpowiedni src zdjecia
dots.childNodes.forEach((item, index) => {
    item.addEventListener('click', () => {
        slide.src = images[index];
        // ustawiam licznik zgodny z wyswietlanym zdjeciem zeby prev i next dzialalo
        currentImage = index;
    });
});



// pierwszy sposob, niezbyt dobry ale dzialal :)
// for (i = 0; i < images.length; i++) {
//     const dot = document.createElement('span');
//     dots.appendChild(dot);
//     // w srodku petli dodaję te samą klase do każdej kropki
//     dot.classList.add('dot');
//     // ustawiam każdej kolejny numer z petli w setAttribute
//     dot.setAttribute('data-slide', i);
//     dot.addEventListener('click', function(){
//         // ustawiam obrazek o indexie takim jaki jest atrubut elementu.
//         let index = parseInt(this.getAttribute('data-slide'));
//         slide.src = images[index];
//         currentImage = index;
//     });
//  }