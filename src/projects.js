'use strict';

const handleMyWorkClick = (e) => {
  const target = e.target;

  if (target.classList.contains('category')) {
    handleActiveSelection(target);

    const filter = target.dataset.category;
    filterProjections(filter);
  }
};

function handleActiveSelection(target) {
  const selectedCategory = document.querySelector('.category--selected');
  selectedCategory.classList.remove('category--selected');
  target.classList.add('category--selected');
}

function filterProjections(filter) {
  const projects = document.querySelectorAll('.project');
  projects.forEach((item) => {
    if (filter === 'all' || item.dataset.type === filter) {
      item.style.display = 'block';
    } else {
      item.style.display = 'none';
    }
  });

  const projectsContainer = document.querySelector('.projects');
  projectsContainer.classList.add('anim-out');

  setTimeout(() => {
    projectsContainer.classList.remove('anim-out');
  }, 250);
}

const init = () => {
  const categories = document.querySelector('.categories');
  categories.addEventListener('click', (e) => handleMyWorkClick(e));
};

init();
