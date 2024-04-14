const menuToggle = document.getElementById('menuToggle');
const menu = document.getElementById('menu');
const clickCircle = document.querySelector('.click-circle');

menuToggle.addEventListener('click', () => {
  menu.classList.toggle('open');
});

clickCircle.addEventListener('click', () => {
  menu.classList.remove('open');
});

document.addEventListener('click', (event) => {
  const target = event.target;
  if (!menu.contains(target) && !menuToggle.contains(target)) {
    menu.classList.remove('open');
  }
});

const menuItems = document.querySelectorAll('.menu a');

menuItems.forEach(item => {
  item.addEventListener('click', () => {
    menu.classList.remove('open');
  });
});
