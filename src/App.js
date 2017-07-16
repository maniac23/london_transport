import React from 'react';
import './App.css';
import { HashRouter, Route, Switch } from 'react-router-dom';
import Landing from './Landing';
import Tube from './Tube';
import CarParks from './CarParks';
import Roads from './Roads';

const FourOhFour = () => <h1>404</h1>;

const App = () => (
  <HashRouter>
    <div className="App">
      <Switch>
        <Route exact path="/" component={Landing} />
        <Route path="/tube" component={Tube} />
        <Route path="/carparks" component={CarParks} />
        <Route path="/roads" component={Roads} />
        <Route component={FourOhFour} />
      </Switch>
    </div>
  </HashRouter>
);

export default App;
