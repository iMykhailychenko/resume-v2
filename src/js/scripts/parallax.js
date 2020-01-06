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
      throttle(this.entryObserver.bind(this), 100),
    );
  }

  entryObserver() {
    const options = {
      rootMargin: '50px',
    };

    const onEntry = entries => {
      entries.forEach(item => {
        if (item.isIntersecting) {
          const position = this.calculatePosition(item.target);
          this.render(item.target, position);
        }
      });
    };

    const observer = new IntersectionObserver(onEntry, options);
    this.element.forEach(item => observer.observe(item));
  }

  calculatePosition(element) {
    let position = (window.scrollY * element.dataset.speed) / 5;
    return position;
  }

  render(element, position) {
    if (this.orientation) {
      element.style = `transform: translateY(${position}px);`;
    } else {
      element.style = `transform: translateX(${position / 2}px);`;
    }
  }
}

new Parallax({
  selector: '.header__parallax',
  orientation: true,
});

new Parallax({
  selector: '.cite__word',
  orientation: false,
});
