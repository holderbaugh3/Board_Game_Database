import React from 'react';
import {render} from 'react-dom';
import {Router, Route, hashHistory, IndexRoute} from 'react-router';
//Import custom components
import About from '../components/about.js';
import Contact from '../components/contact.js';
import Sidebar from '../components/sidebar.js';
import Imagelist from '../components/image-list.js';


  render(
      <Router history={hashHistory}>
        <Route path="/" component={Sidebar}>
          <IndexRoute component={Imagelist}/>
          <Route path="/about" component={About}/>
          <Route path="/contact" component={Contact}/>
        </Route>
      </Router>,
      document.getElementById('content')
    );