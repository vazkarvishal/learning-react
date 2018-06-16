class VisibilityToggle extends React.Component {
  constructor(props) {
    super(props)
    this.handleToggleVisibility = this.handleToggleVisibility.bind(this)
    this.state = {
      name: 'Visibility Toggle',
      visibility: true
    }
  }
  
  handleToggleVisibility() {
    this.setState((prevState) => {
      return {
        visibility: !prevState.visibility
      }
    })
    
  }

  render() {
    return (
      <div>
        <h1>{this.state.name}</h1>
        <button onClick={this.handleToggleVisibility}>
          {this.state.visibility ? 'Hide Details' : 'Show Details'}
        </button>
        {this.state.visibility && (
          <div>
            <p>Eu nulla cillum tempor do irure.</p>
          </div>
        )}
      </div>
     
    )
  }
}

ReactDOM.render(<VisibilityToggle />, document.getElementById('app'))
