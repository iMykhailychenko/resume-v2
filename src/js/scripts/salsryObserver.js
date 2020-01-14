import { bar1, bar2 } from './progress';
import { firstAmmount, secondAmmount } from './countSalary';
const elem = document.querySelector('.salary__inner');
const popup = document.querySelector('.salary__popup');

const options = {
  rootMargin: '-20px',
};

const onEntry = (entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      bar1.animate(1.0);
      bar2.animate(0.8);

      if (!firstAmmount.error && !secondAmmount.error) {
        firstAmmount.start();
        secondAmmount.start();
      } else {
        console.error(firstAmmount.error);
        console.error(secondAmmount.error);
      }

      setTimeout(() => {
        popup.classList.remove('hidden');
      }, 2000);

      setTimeout(() => {
        popup.classList.add('hidden');
      }, 5000);
    }
  });
};

const observer = new IntersectionObserver(onEntry, options);

observer.observe(elem);

export { observer };
