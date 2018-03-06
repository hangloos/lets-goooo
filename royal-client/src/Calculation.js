import React, { Component } from 'react';
import logo from './logo.png';
import './App.css';
import Select from 'react-select';



class Calculation extends Component {

  // constructor() {
  //   super()

  //   this.state = {
  //     data_details: []
  //   }
  // }


  componentDidMount() {
    debugger
    // this.props.data.data_details
    // CalculationsService.fetchData().then(data => this.setState({
    //   data_details: data
    // }))
  }


  render() {
    var options = this.props.data.data_details
    return (
      <div className="Calculation">
        <Select options={options} />
      </div>
    );
  }
}

export default Calculation;