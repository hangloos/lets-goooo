import React, { Component } from 'react';
import logo from './logo.png';
import './App.css';
import CalculationsService from './services/CalculationsService';
import Calculation from './Calculation.js';
import Select from 'react-select';
import Location from './Location.js';
//import Request from 'superagent';
import fetchJsonp from 'fetch-jsonp'

class App extends Component {

  constructor() {
    super()

    this.state = {
      data_details: [],
      google: [],
      selectedCalculation: []
    }
  }


  componentWillMount() {
    CalculationsService.fetchData().then(data => this.setState({
      data_details: data
    }))
  }

  selectedItem(item)  {
    //debugger
    
    var addresses = []
    // var cities = []
    // var zipcodes = []
    for (var i = 0; i < item.routes.length; i++)  {
      //debugger
      var placeholder = [
        i,
        item.routes[i].location.address,
        item.routes[i].location.city,
        item.routes[i].location.zipcode
        ]
      addresses.push(placeholder)
      //addresses[i] = placeholder
      //addresses[i] = item.routes[i].location.address
      // cities[i] = item.routes[i].location.city
      // zipcodes[i] = item.routes[i].location.zipcode
    }
     //debugger
    this.setState({
      selectedCalculation: addresses
    })
  
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

//http://open.mapquestapi.com/directions/v2/route?key=AgRGMAVG5BryzbSj6Dgw237kJoddHNaz&from=301 Hillwick Lane Schaumburg 60193&to=1509 W Thomas St Chicago 60642

  getGoogleData(address) {
   // debugger

    var time_data = new Date() * 1
    var first_address = this.state.selectedCalculation[address[0]-1][1] + ", " + this.state.selectedCalculation[address[0]-1][2]+ " "+ this.state.selectedCalculation[address[0]-1][3]
    var second_address = address[1] + ", " + address[2] + " " + address[3]
    //debugger
    var url =  "https://maps.googleapis.com/maps/api/directions/json?origin=" + first_address + "&destination=" + second_address + "&mode=driving&departure_time=" + time_data + "&traffic_model=best_guess&key=AIzaSyAed6resi7KpjwSDNFzYCsnt5d89dwlGE8"
     const options = {
     method: 'GET',
     headers: new Headers({'content-type': 'application/json'}),
     
    }
    fetchJsonp("http://www.mapquestapi.com/directions/v2/optimizedroute?key=AgRGMAVG5BryzbSj6Dgw237kJoddHNaz&json={%22locations%22:[%22301%20Hillwick%20Lane%20Schaumburg%2060193%22,%20%221509%20W%20Thomas%20St%20Chicago%2060642%22]}")
      .then(response => response.json())
      .then( data => {
        console.log(data.route.realTime)
      })
 
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
          {this.state.selectedCalculation.map(address => <button value={address[1]} onClick={this.getGoogleData.bind(this,address)}>{address[1]}</button>)}
        </div>
      </div>
    );
  }
}

export default App;
