import jump from 'jump.js';

const links = document.querySelectorAll('.scroll-js');

links.forEach(item => {
  item.addEventListener('click', () => {
    jump(item.hash);
  });
});
