

let visibility = false;
const app = {
  name: 'Visibility Toggle Example'
}
const appRoot = document.getElementById('app');

const toggleVisibility = (e) => {
  console.log ("This works")
  visibility = !visibility
  renderToggleExample()

}
const renderToggleExample = () => {
  const template = (
    <div>
      <h1>{app.name}</h1>
        <button onClick={toggleVisibility}>
          {visibility ? 'Hide details' : 'Show details'}
        </button>
        {visibility && (
          <div>
            <p>Sit dolor sit ullamco excepteur veniam cupidatat qui deserunt. Ullamco sit nulla ea aute cillum ex mollit excepteur amet quis. Tempor laborum adipisicing enim duis est esse cupidatat. Qui id laboris esse minim eu ut nisi. In Lorem ullamco irure occaecat aliquip voluptate nulla laboris dolor. Enim irure officia aute elit aliqua.</p>
        </div>
        )}
      
    </div>
  )
  ReactDOM.render(template, appRoot);
  
}

renderToggleExample()