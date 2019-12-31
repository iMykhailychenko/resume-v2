const navBtn = document.querySelector('.header__burger');
const header = document.querySelector('.header');

navBtn.addEventListener('click', () => {
  header.classList.toggle('active');

  const isActive = header.classList.contains('active');
  if (isActive) {
    document.body.style.overflow = 'hidden';
  } else {
    document.body.style.overflow = 'auto';
  }
});
