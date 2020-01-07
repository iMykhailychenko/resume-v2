const links = document.querySelectorAll('.link--copy');

links.forEach(item => {
  item.addEventListener('click', e => {
    e.preventDefault();
    const selection = window.getSelection();
    const range = document.createRange();
    range.selectNodeContents(item.firstElementChild);
    selection.removeAllRanges();
    selection.addRange(range);

    try {
      document.execCommand('copy');
      selection.removeAllRanges();

      const text = item.firstElementChild.textContent;
      item.firstElementChild.textContent = 'Copied!';
      item.classList.add('copied');
      item.style.background = 'rgb(11, 183, 171)';

      setTimeout(() => {
        item.firstElementChild.textContent = text;
        item.classList.remove('copied');
        item.style = 'none';
      }, 1200);
    } catch (err) {
      console.log('Copy error' + err);
    }
  });
});
