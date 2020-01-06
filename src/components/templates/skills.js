import content from './skills-content.json';
const skillsTempl = require('./skills-templ.pug');
const items = skillsTempl(content);
const skillsList = document.querySelector('.carousel__list');
skillsList.insertAdjacentHTML('beforeend', items);