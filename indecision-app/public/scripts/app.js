'use strict';

console.log('App.js is running');

// JSX - JavaScript XML

var app = {
  title: 'Learning React',
  subtitle: 'This is a test which needs to pass'
};
var template = React.createElement(
  'div',
  null,
  React.createElement(
    'h1',
    null,
    app.title
  ),
  React.createElement(
    'p',
    null,
    'Description: ',
    app.subtitle
  )
);

var user = {
  name: 'Vishal Vazkar',
  age: 26,
  location: 'Leicester'
};

var templateTwo = React.createElement(
  'div',
  null,
  React.createElement(
    'h1',
    null,
    user.name
  ),
  React.createElement(
    'p',
    null,
    'Age: ',
    user.age
  ),
  React.createElement(
    'p',
    null,
    'Location: ',
    user.location
  )
);
var appRoot = document.getElementById('app');

ReactDOM.render(template, appRoot);
