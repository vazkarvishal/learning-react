// ==== new component ====
class IndecisionApp extends React.Component {
  
  constructor(props) {
    super(props)
    this.handleDeleteOptions = this.handleDeleteOptions.bind(this)
    this.handlePick = this.handlePick.bind(this)
    this.handleAddOption = this.handleAddOption.bind(this)
    this.state = {
      options: [],
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

  handleAddOption(option) {

    if (!option) {
      return 'Enter valid value to add item'
    } else if (this.state.options.indexOf(option) > -1) {
      return 'This option already exists'
    }

    this.setState((prevState) => {
      return {
        options: prevState.options.concat(option)
      }
    })
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
        
        <AddOption
          handleAddOption={this.handleAddOption}
        />
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
  
  constructor(props) {
    super(props)
    this.handleAddOption = this.handleAddOption.bind(this)
    this.state = {
      error: undefined
    }
  }

  handleAddOption(e) {
    e.preventDefault()

    const option = e.target.elements.option.value.trim()

    // to avoid confusions, the below error variable 
    // is different to the error object which is passed
    // in the constructor of this component
    const error = this.props.handleAddOption(option)
    
    this.setState(() => {
      return {
        // this is the same as error: error
        error
      }
    })

  }

  render() {
    return (
      <div>
        {this.state.error && <p>{this.state.error}</p>}
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