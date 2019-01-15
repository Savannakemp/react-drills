import React, { Component } from 'react';
import logo from './logo.svg'
import './App.css';
import App1 from './Components/App1'

class App extends Component {
  constructor(){
    super();
    this.state = {
        text: []
    }
  }
  render() {
    return (
      <div className="App">
        <App1 />
      </div>
    );
  }
}

export default App;
