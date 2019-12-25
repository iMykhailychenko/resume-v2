const placeholder = document.querySelector('.placeholder');

export default {
  show() {
    placeholder.classList.add('visible');
  },

  hide() {
    placeholder.classList.remove('visible');
  },
};
