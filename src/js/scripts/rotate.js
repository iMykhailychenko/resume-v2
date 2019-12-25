class Rotate {
  constructor({ selector }) {
    this._elements = document.querySelectorAll(selector);
    this.rotateEvent();
  }
  rotateEvent() {
    this._elements.forEach(item => {
      const child = item.firstElementChild;
      child.addEventListener('mousemove', this.startRotate.bind(this));
      child.addEventListener('mouseout', this.stopRotate.bind(this));
    });
  }
  startRotate(event) {
    const box = event.currentTarget;
    const height = box.offsetHeight / 2;
    const width = box.offsetWidth / 2;
    box.style.transform = `rotateX(${-(event.offsetY - height) /
      15}deg) rotateY(${(event.offsetX - width) / 15}deg)`;
  }
  stopRotate(event) {
    const box = event.currentTarget;
    box.style.transform = 'rotateX(0)';
  }
}

new Rotate({
  selector: '.education__item',
});

new Rotate({
  selector: '.carousel__item',
});
