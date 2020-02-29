import facts from './fetchCatFacts';

const templ = require('../../components/templates/cats-templ.pug');
const loader = document.querySelector('.cats__loader');
let currentPage = 1;

const getDataFomFetch = data => {
  const items = templ({ list: data });
  const skillsList = document.querySelector('.cats__list');
  skillsList.insertAdjacentHTML('beforeend', items);
};

const options = {
  rootMargin: '180px',
};

const onEntry = (entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      currentPage += 1;
      facts.fetchFacts(getDataFomFetch, currentPage);
    }
  });
};

const observer = new IntersectionObserver(onEntry, options);

observer.observe(loader);
