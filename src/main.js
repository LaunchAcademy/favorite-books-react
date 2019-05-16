import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';

import App from "./components/App"

//insert the list of articles into the DOM
ReactDOM.render(
  <App />, 
  document.getElementById('app')
);
