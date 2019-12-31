class Slider {
  constructor({ sliderWrp, btnPrev, btnNext, slidePerClick }) {
    this.sliderWrp = sliderWrp;
    this.btnPrev = btnPrev;
    this.btnNext = btnNext;
    this.slidePerClick = slidePerClick;
    this.position = 0;
    this.width = this.sliderWrp.offsetWidth;
    this.items = this.sliderWrp.childElementCount;
    this.clickNext();
    this.clickPrev();
  }

  getWidthOfOneClick() {
    return Math.round(this.width / this.items) * this.slidePerClick;
  }

  getMaxPosition() {
    let position = 0;
    const widthOfOneClick = this.getWidthOfOneClick();
    for (position; position < this.width; position += widthOfOneClick);
    return position - widthOfOneClick;
  }

  clickNext() {
    this.btnNext.addEventListener('click', () => {
      const widthOfOneClick = this.getWidthOfOneClick();
      this.position -= widthOfOneClick;
      const isMaxPosition = this.position * -1 > this.getMaxPosition();
      if (isMaxPosition) {
        this.position = 0;
      };
      this.renderClick();
    });
  }

  clickPrev() {
    this.btnPrev.addEventListener('click', () => {
      const widthOfOneClick = this.getWidthOfOneClick();
      this.position += widthOfOneClick;
      if (this.position > 0) {
        this.position = -this.getMaxPosition();
      };
      this.renderClick();
    });
  }

  renderClick() {
    this.sliderWrp.style.left = this.position + 'px';
  }
}

new Slider({
  sliderWrp: document.querySelector('.carousel__list'),
  btnPrev: document.querySelector('.carousel__back'),
  btnNext: document.querySelector('.carousel__next'),
  slidePerClick: 3,
});
