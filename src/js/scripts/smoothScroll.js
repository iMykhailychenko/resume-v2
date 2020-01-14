import jump from 'jump.js';
import { parallax } from './parallax';

const links = document.querySelectorAll('.scroll-js');

links.forEach(item => {
  item.addEventListener('click', () => {
    parallax.active = false;
    document.body.classList.add('disable-hover');
    jump(item.hash, { duration: 4000 });
    setTimeout(() => {
      parallax.active = true;
      document.body.classList.remove('disable-hover');
    }, 4000);
  });
});
