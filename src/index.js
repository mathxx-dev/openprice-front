import React from 'react';
import ReactDOM from 'react-dom';
import Homepage from './pages/home';
import './static/scss/base.scss';


import Header from './pages/components/header';
import Footer from './pages/components/footer';

ReactDOM.render(
  <React.StrictMode>
    <div>
      <Header />
      <Homepage />
      <Footer />

    </div>
  </React.StrictMode>,
  document.getElementById('root')
);
