import React from 'react';
import { BrowserRouter, Route, Redirect, Switch } from 'react-router-dom';

// required to render code
import Prism from 'prismjs';
import 'prismjs/themes/prism-coy.css'

import HomeView from './layout/HomeView';
import RegularView from './layout/RegularView';
import ContactView from './layout/ContactView';
import AboutView from './layout/AboutView';
import AuthorView from './layout/AuthorView';
import BlogPostView from './layout/BlogPostView';
import BlogIndexView from './layout/BlogIndexView';
import CategoryView from './layout/CategoryView';

import './assets/css/all.min.css';
import './assets/css/MontserratCallie.css';
// import './assets/css/bootstrap.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './assets/css/style.css';

class App extends React.Component {
  render(){
    return (
      <BrowserRouter>
        <Switch>
          {/* Link order matters here */}
          <Route path='/blog/:id' component={BlogPostView} />
          <Route path='/blog' component={BlogIndexView} />
        {/*
          <Route path='/blog' component={BlogIndex} />
          <Route path='/post/:id' component={BlogPost} />
          <Route path='/home' component={Index} />
          <Route path='/icons' component={NucleoIcons} />
          <Route path='/presentation' component={Presentation} />
          <Route path='/sections' component={Sections} />
          {/*<Route path="/" render={props => <Index {...props} />} />*/}
          <Route path='/regular' component={RegularView} />
          <Route path='/contact' component={ContactView} />
          <Route path='/about' component={AboutView} />
          <Route path='/author' component={AuthorView} />
          {/*
          render={( {blog}: BlogPageProps) => (
            <BlogPostView id={blog.params.id} /> )} />
          */}
          <Route path='/category' component={CategoryView} />
          <Route path='/' component={HomeView} />
          <Redirect to='/' />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
