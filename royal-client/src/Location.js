import React, { Component } from 'react';
import './App.css';



class Location extends Component {

  constructor() {
    super()

    this.state = {
      data: []
    }
  }


  componentWillReceiveProps(nextProps) {
    this.setState({
      data: nextProps
    })
  }

// I need to do an if statement. If there is data, then display [0]
// if there is not then its nothing

  render() {
    return (
      <div >
        {this.state.data.data}
      </div>
    );
  }
}

export default Location;