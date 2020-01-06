import facts from './fetchCatFacts';
import { getDataFromLocalStorage, setDataToLocalStorage } from './localStorage';

const templ = require('../../components/templates/cats-templ.pug');
const loader = document.querySelector('.cats__loader');
let currentPage = 1;
let arr = [];

const getDataFomFetch = data => {
  arr = data.map(item => item);
  const items = templ({ list: arr });
  const skillsList = document.querySelector('.cats__list');
  skillsList.insertAdjacentHTML('beforeend', items);
};

facts.fetchFacts(getDataFomFetch, currentPage);

const options = {
  rootMargin: '50px',
};

const onEntry = (entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      currentPage += 1;
      facts.fetchFacts(getDataFomFetch, currentPage);
    }
  });
};

const observer = new IntersectionObserver(onEntry, options);

observer.observe(loader);
