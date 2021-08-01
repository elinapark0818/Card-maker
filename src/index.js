import React from 'react';
import ReactDOM from 'react-dom';
import './index.module.css';
import App from './app';

import { BrowserRouter } from 'react-router-dom';
import firebase from './firebase.utills';

console.log(firebase);

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById('root')
);
