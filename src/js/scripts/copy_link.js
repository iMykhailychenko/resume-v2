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

      setTimeout(() => {
        item.firstElementChild.textContent = text;
        item.classList.remove('copied');
      }, 1200);
    } catch (err) {
      console.log('Copy error' + err);
    }
  });
});
