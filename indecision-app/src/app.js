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

var templateTwo = (
  <div>
    <h1>Vishal Vazkar</h1>
    <p>Age: 26</p>
    <p>Location: Leicester</p>
  </div>
);
var appRoot = document.getElementById('app');

ReactDOM.render(templateTwo, appRoot);