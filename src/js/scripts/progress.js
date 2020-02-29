const ProgressBar = require('progressbar.js');
const firstBar = document.querySelector('.salary__graph--red');
const secondBar = document.querySelector('.salary__graph--green');

const bar1 = new ProgressBar.Circle(firstBar, {
  color: 'rgb(11, 183, 171)',
  trailColor: '#eee',
  trailWidth: 1,
  duration: 4500,
  easing: 'bounce',
  strokeWidth: 20,
  from: { color: 'rgb(250, 250, 250)', a: 0 },
  to: { color: 'rgb(238, 108, 108)', a: 1 },
  step: function(state, circle) {
    circle.path.setAttribute('stroke', state.color);
  },
});

const bar2 = new ProgressBar.Circle(secondBar, {
  color: 'rgb(11, 183, 171)',
  trailColor: '#eee',
  trailWidth: 1,
  duration: 4500,
  easing: 'bounce',
  strokeWidth: 20,
  from: { color: 'rgb(250, 250, 250)', a: 0 },
  to: { color: 'rgb(250, 250, 250)', a: 1 },
  step: function(state, circle) {
    circle.path.setAttribute('stroke', state.color);
  },
});

export { bar1, bar2 };
