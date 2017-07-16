// component for showing Tube status info

import React, { Component } from 'react';
import axios from 'axios';
import StatusCard from './StatusCard';
import GoBack from './GoBack';
import Loader from './Loader';
import './Tube.css';

class Tube extends Component {
  state = {
    loading: true,
    apiData: []
  };

  //get data from API
  componentDidMount() {
    axios.get(`https://api.tfl.gov.uk/line/mode/tube/status?app_id=37b3cb3e&app_key=2e35b8e85289633355f76896fcbe68a2`)
      .then((response) => {
        this.setState({ loading: false });
        this.setState({ apiData: response.data });
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
            {this.state.apiData.map(item =>
              <StatusCard
                key={item.id}  
                name={item.name}
                status={item.lineStatuses[0].statusSeverityDescription}
                reason={item.lineStatuses[0].reason ? item.lineStatuses[0].reason : null}
                severity={item.lineStatuses[0].statusSeverity}
              />
            )}
          </div> 
        </div>    
      )
    }
  }
};

export default Tube;