import React, { Component } from 'react'

class App1 extends Component {
    constructor(){
        super();
        this.state = {
            message: ''
        }
    }

    handleChange(val){{
        this.setState({ message: val})
    }}

    render(){
        return(
            <div>
                <input onChange={(e) => this.handleChange(e.target.value)} type="text"/>
                <p>{this.state.message}</p>
            </div>
        )
    }
}

export default App1