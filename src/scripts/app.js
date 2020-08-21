const $nav = document.getElementById('navigation');
const $navToggle = document.getElementById('navigation-toggle');

$navToggle.addEventListener('click', () => {
  $nav.classList.toggle('navigation--open')
});