const loader = document.querySelector('.page-loading');
const header = document.querySelector('.header');
document.body.style.overflow = 'hidden';

window.addEventListener('load', () => {
  setTimeout(() => {
    document.body.style.overflow = 'auto';
    header.classList.add('introduction');
    loader.style.display = 'none';
  }, 1000);
});
