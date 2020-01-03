import React from 'react';
import { BrowserRouter, Route, Redirect, Switch } from 'react-router-dom';

import Index from './views/Index';
import BlogIndex from './views/BlogIndex';
import BlogPost from './views/BlogPost';
import NucleoIcons from './views/NucleoIcons';
import Presentation from './views/Presentation';
import Sections from './views/Sections';

//import Header from './components/Header/Header';
//import Footer from './components/Footer/Footer';

//import './assets/css/Montserrat.css';
import './assets/scss/fontawesome/scss/fontawesome.scss';
import './assets/scss/fontawesome/scss/regular.scss';
import './assets/scss/fontawesome/scss/solid.scss';
import './assets/scss/fontawesome/scss/brands.scss';
import './assets/css/bootstrap.min.css';
import './assets/scss/paper-kit.scss';
import './assets/demo/demo.css';
import './assets/demo/react-demo.css';

class App extends React.Component {
  render(){
    return (
      <BrowserRouter>
        <Switch>
          <Route path='/blog' component={BlogIndex} />
          <Route path='/post' component={BlogPost} />
          <Route path='/home' component={Index} />
          <Route path='/icons' component={NucleoIcons} />
          <Route path='/presentation' component={Presentation} />
          <Route path='/sections' component={Sections} />
          {/*<Route path="/" render={props => <Index {...props} />} />*/}
          <Redirect to='/blog' />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
