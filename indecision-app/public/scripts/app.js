'use strict';

console.log('App.js is running');

// JSX - JavaScript XML

var app = {
  title: 'Learning React',
  subtitle: 'This is a test which needs to pass',
  options: ['One', 'Two']
};
var template = React.createElement(
  'div',
  null,
  React.createElement(
    'h1',
    null,
    app.title
  ),
  app.subtitle && React.createElement(
    'p',
    null,
    'Description: ',
    app.subtitle
  ),
  React.createElement(
    'p',
    null,
    app.options.length > 0 ? 'Here are your options' : 'No Options'
  ),
  React.createElement(
    'ol',
    null,
    React.createElement(
      'li',
      null,
      'Option 1'
    ),
    React.createElement(
      'li',
      null,
      'Option 2'
    )
  )
);

var count = 0;
var addOne = function addOne() {
  count++;
  renderCounterApp();
};

var minusOne = function minusOne() {
  count--;
  renderCounterApp();
};

var reset = function reset() {
  count = 0;
  renderCounterApp();
};

var appRoot = document.getElementById('app');

var renderCounterApp = function renderCounterApp() {

  var templateTwo = React.createElement(
    'div',
    null,
    React.createElement(
      'h1',
      null,
      'Count: ',
      count
    ),
    React.createElement(
      'button',
      { onClick: addOne },
      '+1'
    ),
    React.createElement(
      'button',
      { onClick: reset },
      'reset'
    ),
    React.createElement(
      'button',
      { onClick: minusOne },
      '-1'
    )
  );

  ReactDOM.render(templateTwo, appRoot);
};

renderCounterApp();
