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

const init = () => {
  window.addEventListener('scroll', (e) => changeHeaderColor(e));
};

init();
