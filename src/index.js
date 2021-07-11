import React from 'react';
import ReactDOM from 'react-dom';

import Homepage from './pages/home';
import About from './pages/about';

import './static/scss/base.scss';

import Header from './pages/components/header';
import Footer from './pages/components/footer';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Header />
      
      <Switch>

        <Route path="/about">
          <About />
        </Route>
        
        <Route path="/">
          <Homepage />
        </Route>

      </Switch>
      <Footer />
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);
