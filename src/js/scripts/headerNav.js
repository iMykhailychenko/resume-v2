const navBtn = document.querySelector('.header__burger');
const header = document.querySelector('.header');
const links = document.querySelectorAll('.scroll-js');

navBtn.addEventListener('click', () => {
  header.classList.toggle('active');
  const isActive = header.classList.contains('active');
  if (isActive) {
    document.body.style.overflow = 'hidden';
  } else {
    document.body.style.overflow = 'auto';
  }
});

links.forEach(item => {
  item.addEventListener('click', () => {
    const isActive = header.classList.contains('active');
    if (isActive) {
      header.classList.remove('active');
      document.body.style.overflow = 'auto';
    }
  });
});
