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

let count = 0
const addOne = () => {
  count++
  renderCounterApp()
}

const minusOne = () => {
  count--
  renderCounterApp()
}

const reset = () => {
  count = 0
  renderCounterApp()
}


const appRoot = document.getElementById('app');

const renderCounterApp = () => {

  const templateTwo = (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={addOne}>+1</button>
      <button onClick={reset}>reset</button>
      <button onClick={minusOne}>-1</button>
    </div>
  );

  ReactDOM.render(templateTwo, appRoot)
}

renderCounterApp()