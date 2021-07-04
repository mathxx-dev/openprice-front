import React from 'react';
import ReactDOM from 'react-dom';
import Homepage from './pages/home';
import './static/scss/base.scss';


ReactDOM.render(
  <React.StrictMode>
    <div>
      <Homepage/>

    </div>
  </React.StrictMode>,
  document.getElementById('root')
);
