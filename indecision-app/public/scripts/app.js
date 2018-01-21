'use strict';

console.log('App.js is running');

// JSX - JavaScript XML

var template = React.createElement(
  'div',
  null,
  React.createElement(
    'h1',
    null,
    'Vishal Vazkar'
  ),
  React.createElement(
    'p',
    null,
    'Hello world'
  ),
  React.createElement(
    'ol',
    null,
    React.createElement(
      'li',
      null,
      'Item one'
    ),
    React.createElement(
      'li',
      null,
      'Item two'
    )
  )
);

var templateTwo = React.createElement(
  'div',
  null,
  React.createElement(
    'h1',
    null,
    'Vishal Vazkar'
  ),
  React.createElement(
    'p',
    null,
    'Age: 26'
  ),
  React.createElement(
    'p',
    null,
    'Location: Leicester'
  )
);
var appRoot = document.getElementById('app');

ReactDOM.render(templateTwo, appRoot);
