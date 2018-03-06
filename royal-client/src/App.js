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
      data_details: [],
      selectedCalculation: ""
    }
  }


  componentWillMount() {
    CalculationsService.fetchData().then(data => this.setState({
      data_details: data
    }))
  }


  getApi()  {
    debugger;
    // send the locations to google api here
    // origin_address
    //destination_address
    //time_count
    //https://maps.googleapis.com/maps/api/directions/json?origin={origin_address}&destination={destination_address}&mode=driving&departure_time={time_count}&traffic_model=best_guess&key=AIzaSyAed6resi7KpjwSDNFzYCsnt5d89dwlGE8
  }



  ///https://maps.googleapis.com/maps/api/directions/json?origin=301 Hillwick Lane Schaumburg, IL 60193&destination=150  Thoma St, Chicago, IL 60642&mode=driving
  //&departure_time=1516286542&traffic_model=best_guess&key=AIzaSyAed6resi7KpjwSDNFzYCsnt5d89dwlGE8

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to Royal Flush</h1>
        </header>
        <p className="App-intro">

          <select onChange={this.getApi.bind(this)}>{this.state.data_details.map(x => <option value={this.state.selectedCalculation}>{x.name}</option>)}</select>
        </p>
      </div>
    );
  }
}

export default App;
