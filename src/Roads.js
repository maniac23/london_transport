import React, { Component } from 'react';
import axios from 'axios';
import RoadCard from './RoadCard';
import Map from './Map';
import GoBack from './GoBack';
import Loader from './Loader';
import './Roads.css';

class Roads extends Component {
  state = {
    loading: true,
    roadsStatus: [],
    markers: []
  };

  componentDidMount() {
    axios.get(`https://api.tfl.gov.uk/Road/all/Disruption?stripContent=true&severities=Works&closures=true&app_id=37b3cb3e&app_key=2e35b8e85289633355f76896fcbe68a2`)
      .then((response) => {
        this.setState({
          markers: response.data.map(item => {
            return {
              position: JSON.parse(item.point)
            }
          })
        });
        this.setState({ roadsStatus: response.data });
        this.setState({ loading: false });
      });
  }
  
  render() {
    if (this.state.loading === true) {
      return (<Loader />);
    } else {
      return (
        <div>
          <GoBack />
          <div className="tube-wrapper">
            <ul className="roads-list">
              {this.state.roadsStatus.map(item => {
                const endDate = `${new Date(item.endDateTime).getDate()}-${new Date(item.endDateTime).getMonth()}-${new Date(item.endDateTime).getFullYear()}`; // format endDate

                const startDate = `${new Date(item.startDateTime).getDate()}-${new Date(item.startDateTime).getMonth()}-${new Date(item.startDateTime).getFullYear()}`; // format start date
                
                return (
                  <RoadCard
                    key={item.id}
                    name={item.location}
                    fromDate={startDate}
                    toDate={endDate}
                  />
                )
              }
              )}
            </ul>
            <div className="map">
              <Map
                markers={this.state.markers}
              />
            </div>
          </div>
        </div>
      )
    }          
  }
}

export default Roads;