const header = document.querySelector('.header__inner');
const headerBlock = document.querySelector('.header');

const hideHeader = e => {
    if(e.wheelDeltaY > 0) {
        header.classList.remove('header__hidden');
    } else {
        header.classList.add('header__hidden');
    }
};

window.addEventListener('mousewheel', hideHeader);
