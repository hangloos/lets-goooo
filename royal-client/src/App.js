import React, { Component } from 'react';
import logo from './logo.png';
import './App.css';
import CalculationsService from './services/CalculationsService';
import Calculation from './Calculation.js';
import Select from 'react-select';
import Location from './Location.js';

class App extends Component {

  constructor() {
    super()

    this.state = {
      data_details: [],
      selectedCalculation: [],
      google: []
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
  }

  selectedItem(item)  {
    //debugger
    
    var addresses = []
    // var cities = []
    // var zipcodes = []
    for (var i = 0; i < item.routes.length; i++)  {
      //debugger
      var placeholder = [
        item.routes[i].location.address,
        item.routes[i].location.city,
        item.routes[i].location.zipcode
        ]
      addresses.push(placeholder)
      //addresses[i] = item.routes[i].location.address
      // cities[i] = item.routes[i].location.city
      // zipcodes[i] = item.routes[i].location.zipcode
    }

    this.setState({
      selectedCalculation: addresses
    })
   //  const options = {
   //   method: 'GET',
   //   headers: new Headers({'content-type': 'application/json'}),
   //   mode: 'no-cors'
   // }
   //  //need this to be the time choosen
   //  var time_data = new Date() * 1
   //  var calculation_numbers = []
   //  //for (var i = 0; i < 1;i++) {
   //    fetch('https://maps.googleapis.com/maps/api/directions/json?origin='+addresses[0]+cities[0]+zipcodes[0]+'&destination='+addresses[1]+cities[1]+zipcodes[1]+'&mode=driving&departure_time='+time_data+'&traffic_model=best_guess&key=AIzaSyAed6resi7KpjwSDNFzYCsnt5d89dwlGE8', options)
   //      .then(response => response.json())
   //      .then(data => {
   //            this.setState({ google: data })
   //          })
   //        .catch(function(err) {
   //         console.log(err) 
   //        })

  }
  
//application/x-www-form-urlencoded


//   var url = 'https://example.com/profile';
// var data = {username: 'example'};

// fetch(url, {
//   method: 'POST', // or 'PUT'
//   body: JSON.stringify(data), 
//   headers: new Headers({
//     'Content-Type': 'application/json'
//   })
// }).then(res => res.json())
// .catch(error => console.error('Error:', error))
// .then(response => console.log('Success:', response));



  ///https://maps.googleapis.com/maps/api/directions/json?origin=301 Hillwick Lane Schaumburg, IL 60193&destination=150  Thoma St, Chicago, IL 60642&mode=driving
  //&departure_time=1516286542&traffic_model=best_guess&key=AIzaSyAed6resi7KpjwSDNFzYCsnt5d89dwlGE8
  //<select onChange={this.getApi.bind(this)}>{this.state.data_details.map(x => <option value={this.state.selectedCalculation}>{x.name}</option>)}</select>
  //<button onClick={this.deleteRow.bind(this, id)}>Delete Row</button>

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to Royal Flush</h1>
        </header>
        <p className="App-intro">
          {this.state.data_details.map(x => <button value={x} onClick={this.selectedItem.bind(this,x)}>{x.name}</button>)}
        </p>
        <div>
          <Location data={this.state.selectedCalculation} />
        </div>


      </div>
    );
  }
}

export default App;
