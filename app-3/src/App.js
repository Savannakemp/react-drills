import React, { Component } from 'react'
import './App.css';

class App extends Component {
  constructor(){
    super();
    this.state = {
      filterString: '',
      foodItems: [
        'spaghetti',
         'ice cream',
          'sushi',
           'bologna',
            'cheese'
      ]
    }

  }

  handleChange(filter){
    this.setState({filterString: filter})
  }




  render() {
    let filteredArray = this.state.foodItems.filter(food => {
      return food.includes(this.state.filterString)
    }).map((element, index) => {
      return <h4 key={index}>{element}</h4>
    })

    // let displayArray = filteredArray.map((filter) => {
    //   return filter.
    // })
    

    return (
      <div className="App">
        <input onChange={(e) => {this.handleChange(e.target.value)}}></input>
         <h2>{filteredArray}</h2>
        
      </div>
    );
  }
}

export default App;
