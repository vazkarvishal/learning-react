console.log ('App.js is running');

// JSX - JavaScript XML

var template = (
  <div>
    <h1>Vishal Vazkar</h1>
    <p>Hello world</p>
    <ol>
      <li>Item one</li>
      <li>Item two</li>
    </ol>
  </div>
);


var appRoot = document.getElementById('app');

ReactDOM.render(templateTwo, appRoot);