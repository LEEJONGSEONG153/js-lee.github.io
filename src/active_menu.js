const sectionIds = [
  '#home',
  '#about',
  '#skills',
  '#work',
  '#testimonial',
  '#contact',
];

const sections = sectionIds.map((id) => document.querySelector(id));
const navItems = sectionIds.map((id) =>
  document.querySelector(`[href="${id}"]`)
);
const visibleSections = sectionIds.map(() => false);

const observer = new IntersectionObserver(
  (entries) => observerCallback(entries),
  {
    root: null,
    threshold: 0,
  }
);

sections.forEach((item) => observer.observe(item));

const observerCallback = (entries) => {
  entries.forEach((entry) => {
    const index = sectionIds.indexOf(`#${entry.target.id}`);
    visibleSections[index] = entry.isIntersecting;
    console.log(visibleSections);
    if (entry.isIntersecting) {
      navItems.forEach((item) => item.classList.remove('active'));
      const findMenu = document.querySelector(`[data-menu=${entry.target.id}]`);
      findMenu.classList.add('active');
    }
  });
};
