import React from 'react';
import { BrowserRouter, Route, Redirect, Switch } from 'react-router-dom';

import Callie from './layout/view';

import './assets/css/all.min.css';
import './assets/css/MontserratCallie.css';
import './assets/css/bootstrap.min.css';
import './assets/css/style.css'

class App extends React.Component {
  render(){
    return (
      <BrowserRouter>
        <Switch>
        {/*
          <Route path='/blog' component={BlogIndex} />
          <Route path='/post/:id' component={BlogPost} />
          <Route path='/home' component={Index} />
          <Route path='/icons' component={NucleoIcons} />
          <Route path='/presentation' component={Presentation} />
          <Route path='/sections' component={Sections} />
          {/*<Route path="/" render={props => <Index {...props} />} />*/}
          <Route path='/callie' component={Callie} />
          <Redirect to='/callie' />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
