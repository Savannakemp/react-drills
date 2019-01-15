import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Image from './Components/Image'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Image myImage={"https://images-na.ssl-images-amazon.com/images/G/01/aplusautomation/vendorimages/776d67e3-7c96-4b89-9e1c-52e756f6b6a4.jpg._CB277954744__SR300,300_.jpg"}/>
      </div>
    );
  }
}

export default App;
