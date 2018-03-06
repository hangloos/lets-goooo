import React, { Component } from 'react';
import logo from './logo.png';
import './App.css';
import CalculationsService from './services/CalculationsService'
import Calculation from './Calculation.js'
import Select from 'react-select';

class App extends Component {

  constructor() {
    super()

    this.state = {
      data_details: []
    }
  }


  componentWillMount() {
    CalculationsService.fetchData().then(data => this.setState({
      data_details: data
    }))
  }


  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to Royal Flush</h1>
        </header>
        <p className="App-intro">

          <select>{this.state.data_details.map(x => <option>{x.name}</option>)}</select>
        </p>
      </div>
    );
  }
}

export default App;
