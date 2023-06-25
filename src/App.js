import React from 'react';
import logo from './logo.svg';
import './App.css';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      linkText: "Learn React from State",
      inputValue: "This is the value of the input"
    }
    this.functionName = this.functionName.bind(this)
    this.customFunctionName = this.customFunctionName.bind(this)
  }
  // Functions

  functionName(){
    this.setState({linkText: "Function"})
  }

  arrowFunctionName = () => {
    this.setState({linkText: "Arrow Function"})
  }

  customFunctionName(textToShow){
    this.setState({linkText: textToShow})
  }

  customArrowFunctionName = (textToShow) => {
    this.setState({linkText: textToShow})
  }

  handleUpdateInputText = (event) => {
    console.log(event)
    console.log(event.target)
    console.log(event.target.value)
    this.setState({inputValue: event.target.value})
  }

  handleShowInLinkText = (value) => {
    console.log(value)
    this.setState({linkText: value})
  }

  render() {
    // Code
    const { linkText } = this.state

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <input
            style={{ width: '20%' }}
            value={this.state.inputValue}
            onChange={this.handleUpdateInputText}
          ></input>
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            { /* Use {} to code */ }
            { linkText }
          </a>
          <button onClick={this.functionName} >Function</button>
          <button onClick={this.arrowFunctionName} >Arrow Function</button>
          <button onClick={() => { this.customFunctionName("Custom Function") }} >Custom Function</button>
          <button onClick={() => { this.arrowFunctionName("Custom Arrow Function") }} >Custom Arrow Function</button>
          <button onClick={() => { this.handleShowInLinkText(this.state.inputValue) }} >Show Input Value</button>
        </header>
      </div>
    );
  }
}

export default App;