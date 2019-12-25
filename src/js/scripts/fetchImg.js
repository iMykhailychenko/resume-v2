import placeholder from './loading_img';

export default {
  fetchImg(calback, page) {
    const url = `https://pixabay.com/api/?key=6396306-bb47bc53f6111712a04accee8`;
    const param = `&category=nature&editors_choice=true&per_page=30&orientation=horizontal&image_type=photo&page=${page}`;

    return fetch(url + param)
      .then(response => response.json())
      .then(data => {
        calback(data.hits);
        setTimeout(placeholder.hide, 1000);
      })
      .catch(error => {
        const warn = document.querySelector('.about__warn');
        warn.classList.remove('hidden');
        setTimeout(() => {
          warn.classList.add('hidden');
        }, 7000);
        console.warn('Fetch Error:' + error);
      });
  },
};
