import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Button from './button.js'

class App extends Component {

constructor(props) {
super(props);

this.state = {
buttonValue:'0',
};



}
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Hello!!!!!</h1>
        </header>
        <Button
        buttonText="click me"
        buttonValue={this.state.buttonValue}
        onClick={() => this.setState(state => ({
        buttonValue: state.buttonValue +1
        })

        )}
        />
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
