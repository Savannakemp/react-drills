import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(){
    super();
    this.state = {
      foodItems: ['spaghetti', 'ice cream', 'sushi', 'bologna', 'cheese']
    }
  }

  handleChange(val){
    this.setState({foodItems: val})
  }


  render() {
    let foodsToDisplay = this.state.foodItems.map((element, index) => {
      return (
        <h2 key={index}>{element}</h2>
      )
    })
    return (
      <div className="App">
       {foodsToDisplay}
      </div>
    );
  }
}

export default App;
