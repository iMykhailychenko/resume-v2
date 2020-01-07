const { CountUp } = require('countup.js');
const firstSalary = document.querySelector('.ammount-dou-js');
const secondSalary = document.querySelector('.ammount-my-js');

const options = {
  duration: 3.4,
  separator: ' ',
  prefix: '$',
};

const firstAmmount = new CountUp(firstSalary, 700, options);
const secondAmmount = new CountUp(secondSalary, 601, options);

export { firstAmmount, secondAmmount };
