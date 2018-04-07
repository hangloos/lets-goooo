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
    //debugger
    var details = nextProps.data
    this.setState({
      data: nextProps
    })
  }

// I need to do an if statement. If there is data, then display [0]
// if there is not then its nothing

  render() {
    const dataCount = this.state.data

    const dataInformation = dataCount.length <= 0 ? ("No Data") : (this.state.data.data)
    //debugger
    return (
      <div >
      </div>
    );
  }
}

export default Location;