const changeHeaderColor = (e) => {
  const header = document.querySelector('.header');
  const headerHeight = header.getBoundingClientRect().height;
  const scrollY = window.scrollY;
  if (scrollY > headerHeight) {
    header.classList.add('header--dark');
  } else {
    header.classList.remove('header--dark');
  }
};

const changeHomeOpacity = () => {
  const home = document.querySelector('.home__container');
  const homeHeight = home.getBoundingClientRect().height;
  const scrollY = window.scrollY;
  if (scrollY <= homeHeight) {
    home.style.opacity = 1 - scrollY / homeHeight;
  }
};

const changeArrowVisible = () => {
  const arrowUp = document.querySelector('.arrow-up');
  const homeHeight = home.getBoundingClientRect().height;
  const scrollY = window.scrollY;

  if (scrollY <= homeHeight / 2) {
    arrowUp.style.opacity = 0;
  } else {
    arrowUp.style.opacity = 1;
  }
};

const menuControle = (e) => {
  const headerMenu = document.querySelector('.header__menu');
  headerMenu.classList.toggle('open');
};

const changeMenuVisible = (e) => {
  const navToggle = document.querySelector('.header__toggle');
  if (navToggle) {
    const headerMenu = document.querySelector('.header__menu');
    headerMenu.classList.remove('open');
  }
  const headerMenuItem = document.querySelectorAll('.header__menu__item');
  headerMenuItem.forEach((item) => item.classList.remove('active'));
  e.target.classList.add('active');
};

const init = () => {
  window.addEventListener('scroll', (e) => changeHeaderColor(e));
  window.addEventListener('scroll', (e) => changeHomeOpacity(e));
  window.addEventListener('scroll', (e) => changeArrowVisible(e));
  const navToggle = document.querySelector('.header__toggle');
  navToggle.addEventListener('click', (e) => menuControle(e));
  const headerMenuItem = document.querySelector('.header__menu');
  headerMenuItem.addEventListener('click', (e) => changeMenuVisible(e));
};

init();
