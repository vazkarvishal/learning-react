console.log ('App.js is running');

// JSX - JavaScript XML

const app = {
  title: 'Learning React',
  subtitle: 'This is a test which needs to pass',
  options: ['One','Two']
};
const template = (
  <div>
    <h1>{app.title}</h1>
    {app.subtitle && <p>Description: {app.subtitle}</p>}
    <p>{app.options.length > 0 ? 'Here are your options' : 'No Options'}</p>
    <ol>
      <li>Option 1</li>
      <li>Option 2</li>
    </ol>
  </div>
);

const user = {
  name: 'Vishal Vazkar',
  age: 19,
  location: 'Leicester'
};

const templateTwo = (
  <div>
    <h1>{user.name ? user.name : 'Anonymous'}</h1>
    {(user.age && user.age >= 18) && <p>Age: {user.age}</p>}
    <p>Location: {user.location}</p>
  </div>
);
const appRoot = document.getElementById('app');

ReactDOM.render(template, appRoot);