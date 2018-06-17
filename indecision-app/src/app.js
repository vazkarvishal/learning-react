// ==== new component ====
class IndecisionApp extends React.Component {
  
  constructor(props) {
    super(props)
    this.handleDeleteOptions = this.handleDeleteOptions.bind(this)
    this.handlePick = this.handlePick.bind(this)
    this.state = {
      options: ['Thing one', 'Thing two', 'Thing four'],
      title: 'Indecision',
      subtitle: 'Put your life in the hands of a computer'
    }
  }

  handleDeleteOptions() {
    this.setState(() => {
      return {
        options: []
      }
    })
  }

  handlePick() {
    const randomNum = Math.floor(Math.random() * this.state.options.length)
    const option = this.state.options[randomNum]
    alert(option)
  }

  // ==== This render function renders all individual components, thus behaving as the parent component ====
  render() {

    return(
      <div>
        <Header 
          title={this.title} 
          subtitle={this.subtitle} 
        />

        <Action 
          hasOptions={this.state.options.length > 0} 
          handlePick={this.handlePick}
        />

        <Options 
          options={this.state.options}
          handleDeleteOptions={this.handleDeleteOptions}
        />
        
        <AddOption />
      </div>
    )
  }
}

// ==== new component ====
class Header extends React.Component {
  render() {
    return (
      <div>
        <h1>{this.props.title}</h1>
        <h2>{this.props.subtitle}</h2>
      </div>
    )
  }
}


// ==== new component ====
class Action extends React.Component {

  render() {
    return (
        <div>
          <button 
            onClick={this.props.handlePick}
            disabled={!this.props.hasOptions}
          >
          What should I do</button>
        </div>
      
    )
  }
}

// ==== new component ====
class Options extends React.Component {

  render() {
    return (
      <div>
        <button onClick={this.props.handleDeleteOptions}>Remove all options</button>
        {
          this.props.options.map((option) => <Option key={option} optionText={option} />)
        }
      </div>
    )
  }
}


// ==== new component ====
class Option extends React.Component {
  render() {
    return(
      <div>
        Option: {this.props.optionText}
      </div>
    )
  }
}

// ==== new component ====
class AddOption extends React.Component {
  
  handleAddOption(e) {
    e.preventDefault()
    const option = e.target.elements.option.value.trim()
    if (option) {
      alert (option)
    }
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleAddOption}>
          <input type="text" name="option" />
          <button>Add Option</button>
        </form>
      </div>
    )
  }
}

// ==== Main react dom render call ====
ReactDOM.render(<IndecisionApp/>, document.getElementById('app'))