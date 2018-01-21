console.log ('App.js is running');

// JSX - JavaScript XML

var app = {
  title: 'Learning React',
  subtitle: 'This is a test which needs to pass'
};
var template = (
  <div>
    <h1>{app.title}</h1>
    <p>Description: {app.subtitle}</p>
  </div>
);

var user = {
  name: 'Vishal Vazkar',
  age: 26,
  location: 'Leicester'
};

var templateTwo = (
  <div>
    <h1>{user.name}</h1>
    <p>Age: {user.age}</p>
    <p>Location: {user.location}</p>
  </div>
);
var appRoot = document.getElementById('app');

ReactDOM.render(template, appRoot);