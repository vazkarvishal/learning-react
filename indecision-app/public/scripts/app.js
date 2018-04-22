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
  console.log('Add one');
};

var minusOne = function minusOne() {
  console.log('Minus one');
};

var reset = function reset() {
  console.log('reset counter');
};

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

var appRoot = document.getElementById('app');

ReactDOM.render(templateTwo, appRoot);
