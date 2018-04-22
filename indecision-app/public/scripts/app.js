'use strict';

console.log('App.js is running');

// JSX - JavaScript XML

var app = {
  title: 'Learning React',
  subtitle: 'This is a test which needs to pass',
  options: ['One', 'Two']
};

var onFormSubmit = function onFormSubmit(e) {
  e.preventDefault();
  console.log('Form has been submitted');
  var option = e.target.elements.option.value;
  if (option) {
    console.log('text value is:' + option);
    app.options.push(option);
    renderFormExample();
  }
};

var clearOptions = function clearOptions() {
  app.options = [];
  renderFormExample();
};
var appRoot = document.getElementById('app');
var renderFormExample = function renderFormExample() {
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
      'p',
      null,
      app.options.length
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
    ),
    React.createElement(
      'form',
      { onSubmit: onFormSubmit },
      React.createElement('input', { type: 'test', name: 'option' }),
      React.createElement(
        'button',
        null,
        'Add option'
      ),
      React.createElement(
        'button',
        { onClick: clearOptions },
        'Remove all options'
      )
    )
  );

  ReactDOM.render(template, appRoot);
};
renderFormExample();
