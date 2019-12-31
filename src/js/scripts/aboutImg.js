import imgQuery from './fetchImg';
import placeholder from './loadingImg';
import {
  getDataFromLocalStorage,
  setDataToLocalStorage,
} from './localStorage';

let currentPage = getDataFromLocalStorage('page');
let currentIndex = getDataFromLocalStorage('index');
let arr = [];
const img = document.querySelector('.about__img');
currentIndex -= 1;

const getDataFomFetch = data => {
  arr = data.map(item => item.largeImageURL);
};

const changeImg = () => {
  imgQuery.fetchImg(getDataFomFetch, currentPage);
  img.addEventListener('click', () => {
    if (currentIndex === 30) {
      currentPage += 1;
      currentIndex = 0;

      placeholder.show();
      imgQuery.fetchImg(getDataFomFetch, currentPage);

      setDataToLocalStorage('index', currentIndex);
      setDataToLocalStorage('page', currentPage);
    } else {
      placeholder.show();
      img.src = arr[currentIndex];
      currentIndex += 1;
      setDataToLocalStorage('index', currentIndex);

      img.addEventListener('load', () => {
        placeholder.hide();
      });
    }
  });
};

changeImg();
