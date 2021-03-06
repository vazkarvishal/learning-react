console.log ('App.js is running');

// JSX - JavaScript XML

const app = {
  title: 'Learning React',
  subtitle: 'This is a test which needs to pass',
  options: []
};

const onFormSubmit = (e) => {
  e.preventDefault()
  console.log('Form has been submitted')
  const option = e.target.elements.option.value


  if (option) {
    console.log('text value is:'+ option)
    app.options.push(option)
    e.target.elements.option.value = ''
    renderFormExample()
  }
}

const clearOptions = () => {
  app.options = []
  renderFormExample()
}

const appRoot = document.getElementById('app');
const renderFormExample = () => {
  const template = (
    <div>
      <h1>{app.title}</h1>
      {app.subtitle && <p>Description: {app.subtitle}</p>}
      <p>{app.options.length > 0 ? 'Here are your options' : 'No Options'}</p>
      <p>{app.options.length}</p>
      <ol>
        {
          app.options.map((option) => {
            return <li key={option}>Option: {option}</li>
          })

        }
      </ol>
    <form  onSubmit={onFormSubmit}>
      <input type="text" name="option"/>
      <button>Add option</button>
      <button onClick={clearOptions}>Remove all options</button>
    </form>
    </div>
  );
  
  ReactDOM.render(template, appRoot);
}
renderFormExample()