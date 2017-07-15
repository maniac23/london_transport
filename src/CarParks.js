// component for showing car parks occupancy
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import CarParkCard from './CarParkCard';

class CarParks extends Component {
  state = {
    carParksData: [],
    searchTerm: ''
  };

    //get data from API
  componentDidMount() {
    axios.get(`https://api.tfl.gov.uk/Occupancy/CarPark?app_id=37b3cb3e&app_key=2e35b8e85289633355f76896fcbe68a2`)
      .then((response) => {
        this.setState({ carParksData: response.data });
      });
  };
    
  handleSearch = (e) => {
    this.setState({ searchTerm: e.target.value });
  };
  
  render() {
    return (
      <div>
        <div>
          <Link to="/" className="back-link">&larr; Go back</Link>
        </div>
        <div>
          <input onChange={this.handleSearch} type="text" placeholder="Seach by name" className="search"/>
        </div>
        <div className="tube-wrapper">
          {this.state.carParksData
            .filter(item =>
              item.name.toUpperCase().indexOf(this.state.searchTerm.toUpperCase()) >= 0)
            .map(item => {
              const capacity = item.bays
              .filter(bay => bay.bayType !== 'Disabled') // filtering 'disabled' car bays
            return (
                <CarParkCard
                key={item.id}    
                name={item.name}
                capacity={capacity[0].bayCount}
                occupied={capacity[0].occupied}
                free={capacity[0].free}
              />
            ) 
           }
          )} 
        </div>
      </div>
    )
  }
}


export default CarParks;