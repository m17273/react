import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './app';
import '@fortawesome/fontawesome-free/js/all.js';
import Simplehabit from './components/simplehabit';


ReactDOM.render(
  <React.StrictMode>
    <Simplehabit />
  </React.StrictMode>,
  document.getElementById('root')
);
