const throttle = require('lodash.throttle');

class Parallax {
  constructor({ selector, active }) {
    this.element = document.querySelectorAll(selector);
    this._active = active;
    window.requestAnimationFrame(this.scroll.bind(this));
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

  get active() {
    return this._active;
  }

  set active(value) {
    this._active = value;
  }

  render(element, position) {
    if (this._active) {
      element.style = `transform: translateX(${position / 2}px);`;
    }
  }
}

const parallax = new Parallax({
  selector: '.cite__word',
  active: true,
});

const Rellax = require('rellax');
new Rellax('.header__parallax');

export { parallax };
