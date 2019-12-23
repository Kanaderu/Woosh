import React from 'react';
import { BrowserRouter, Route, Redirect, Switch } from 'react-router-dom';

import Index from './views/Index';

//import Header from './components/Header/Header';
//import Footer from './components/Footer/Footer';

import './assets/css/bootstrap.min.css';
import './assets/scss/paper-kit.scss';
//import './assets/demo/demo.css';
//import './assets/demo/react-demo.css';

class App extends React.Component {
  render(){
    return (
      <BrowserRouter>
        <Switch>
          <Route path='/' component={Index} />
          {/*<Route path="/" render={props => <Index {...props} />} />*/}
          <Redirect to='/' />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
