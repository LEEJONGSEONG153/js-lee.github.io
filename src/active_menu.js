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
    rootMargin: '-20% 0px 0px 0px',
    threshold: [0, 0.98],
  }
);

sections.forEach((item) => observer.observe(item));

const observerCallback = (entries) => {
  let selectLastOne;

  entries.forEach((entry) => {
    const index = sectionIds.indexOf(`#${entry.target.id}`);
    visibleSections[index] = entry.isIntersecting;
    selectLastOne =
      index === sectionIds.length - 1 &&
      entry.isIntersecting &&
      entry.intersectionRatio >= 0.95;
  });

  const navIndex = selectLastOne
    ? sectionIds.length - 1
    : findFirstIntersecting(visibleSections);

  navItems.forEach((item) => item.classList.remove('active'));
  const findMenu = navItems[navIndex];
  findMenu.classList.add('active');
};

const findFirstIntersecting = () => {
  const index = visibleSections.indexOf(true);
  return index >= 0 ? index : 0;
};
