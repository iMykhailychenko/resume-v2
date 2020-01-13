import placeholder from './loadingImg';

export default {
  fetchImg(calback, page) {
    const url = `https://pixabay.com/api/?key=14898579-fa1d2465db163140d99de90b7`;
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
