const top = document.querySelector('#to-top');
const elem = document.querySelector('.header__desc');

const onEntry = (entries, observer) => {
  entries.forEach(entry => {
    if (!entry.isIntersecting) {
      top.style.bottom = '60px';
      top.style.opacity = '1';
    } else {
      top.style.bottom = '-60px';
      top.style.opacity = '0';
    }
  });
};

const observer = new IntersectionObserver(onEntry, null);

observer.observe(elem);
