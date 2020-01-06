const throttle = require('lodash.throttle');

class Parallax {
  constructor({ selector, orientation }) {
    this.element = document.querySelectorAll(selector);
    this.orientation = orientation;
    this.scroll();
  }

  scroll() {
    window.addEventListener(
      'scroll',
      throttle(this.entryObserver.bind(this), 200),
    );
  }

  entryObserver() {
    const onEntry = entries => {
      entries.forEach(item => {
        if (item.isIntersecting) {
          const position = this.calculatePosition(item.target);
          this.render(item.target, position);
        }
      });
    };

    const observer = new IntersectionObserver(onEntry, undefined);
    this.element.forEach(item => observer.observe(item));
  }

  calculatePosition(element) {
    let position = (window.scrollY * element.dataset.speed) / 5;
    return position;
  }

  render(element, position) {
    element.style = `transform: translateX(${position / 2}px);`;
  }
}

new Parallax({
  selector: '.cite__word',
});

const Rellax = require('rellax');
const rellax = new Rellax('.header__parallax');
